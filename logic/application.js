/*
All business logic goes here.
 */
var q = require('q'); // eslint-disable-line id-length
var rp = require('request-promise');

const publicIp = require('public-ip');
const decamelizeKeys = require('decamelize-keys');

const dockerComposeLogic = require('@logic/docker-compose.js');
const diskLogic = require('@logic/disk.js');
const constants = require('@utils/const.js');
const errors = require('@models/errors.js');
const DockerComposeError = errors.DockerComposeError;
const NodeError = errors.NodeError;
const bashService = require('@services/bash.js');

const EXTERNAL_IP_KEY = 'EXTERNAL_IP';

const start = async() => {

  const data = await diskLogic.readSettingsFile(constants.SETTINGS_FILE);
  const settings = JSON.parse(data);

  var lndSettings = decamelizeKeys(settings['lnd'], '_');
  var bitcoindSettings = decamelizeKeys(settings['bitcoind'], '_');

  var envData = {};
  for (const key in lndSettings) {
    if (Object.prototype.hasOwnProperty.call(lndSettings, key)) {
      envData[key.toUpperCase()] = lndSettings[key];
    }
  }

  for (const key in bitcoindSettings) {
    if (Object.prototype.hasOwnProperty.call(bitcoindSettings, key)) {
      envData[key.toUpperCase()] = bitcoindSettings[key];
    }
  }

  // If the settings file already has an external ip that has been manually set by the user, we should not try to
  // automatically discover the external ip address.
  if (!Object.prototype.hasOwnProperty.call(envData, EXTERNAL_IP_KEY)) {
    envData[EXTERNAL_IP_KEY] = await publicIp.v4();
  }

  try {
    await dockerComposeLogic.dockerComposeUp({
      env: envData
    });
  } catch (error) {
    throw new DockerComposeError('Unable to start services');
  }
};

function shutdown() {
  var deferred = q.defer();

  function handleSuccess() {
    deferred.resolve();
  }

  function handleError(error) {
    deferred.reject(new DockerComposeError('Unable to shutdown services', error));
  }

  dockerComposeLogic.dockerComposeDown()
    .then(handleSuccess)
    .catch(handleError);

  return deferred.promise;
}

function reset() {
  var deferred = q.defer();

  function handleSuccess() {
    deferred.resolve();
  }

  function handleError(error) {
    deferred.reject(new DockerComposeError('Unable to reset device', error));
  }

  dockerComposeLogic.dockerComposeDown()
    .then(wipeSettingsVolume)
    .then(createSettingsFile)
    .then(handleSuccess)
    .catch(handleError);

  return deferred.promise;
}

function pull(service) {
  var deferred = q.defer();

  function handleSuccess() {
    deferred.resolve();
  }

  function handleError(error) {
    deferred.reject(error);
  }

  dockerComposeLogic.dockerComposePull(service)
    .then(handleSuccess)
    .catch(handleError);

  return deferred.promise;
}

function restart(service) {
  var deferred = q.defer();

  function handleSuccess() {
    deferred.resolve();
  }

  function handleError(error) {
    deferred.reject(new DockerComposeError('Unable to restart service', error));
  }

  dockerComposeLogic.dockerComposeRestart(service)
    .then(handleSuccess)
    .catch(handleError);

  return deferred.promise;
}

function update(service) {
  var deferred = q.defer();

  function injectService() {
    return service;
  }

  function handleSuccess() {
    deferred.resolve();
  }

  function handleError(error) {
    deferred.reject(new DockerComposeError('Unable to update service', error));
  }

  dockerComposeLogic.dockerComposePull(service)
    .then(injectService)
    .then(dockerComposeLogic.dockerComposeStop)
    .then(injectService)
    .then(dockerComposeLogic.dockerComposeRemove)
    .then(injectService)
    .then(dockerComposeLogic.dockerComposeUpSingleService)
    .then(handleSuccess)
    .catch(handleError);

  return deferred.promise;
}

function createSettingsFile() {
  const defaultConfig = {
    bitcoind: {
      bitcoinNetwork: 'testnet',
      bitcoindListen: true,
    },
    lnd: {
      chain: 'bitcoin',
      backend: 'bitcoind',
      lndNetwork: 'testnet',
      autopilot: false, // eslint-disable-line object-shorthand
    },
    node: {
      remoteLogging: false
    }
  };

  if (!diskLogic.settingsFileExists()) {
    diskLogic.writeSettingsFile(JSON.stringify(defaultConfig));
  }
}

function wipeSettingsVolume() {
  var deferred = q.defer();

  function handleSuccess() {
    deferred.resolve();
  }

  function handleError(error) {
    deferred.reject(error);
  }

  var options = {
    cwd: '/settings',
  };

  bashService.exec('rm', ['-rf', 'settings.json', 'user.json'], options)
    .then(handleSuccess)
    .catch(handleError);

  return deferred.promise;
}

function downloadLogs() {
  var deferred = q.defer();

  const logArchiveBackupPath = '/backup/' + constants.NODE_LOG_ARCHIVE;
  const logArchiveSavedPath = '/tmp/' + constants.NODE_LOG_ARCHIVE;

  function handleSuccess() {
    deferred.resolve(logArchiveSavedPath);
  }

  function handleError(error) {
    deferred.reject(new NodeError('Unable to download log file', error));
  }

  const backUpCommandOptions = [
    'run',
    '-v', 'node_logs:/logs',
    '-v', '/tmp:/backup',
    'alpine',
    'tar', '-cjf', logArchiveBackupPath, '-C', '/logs', './'
  ];

  bashService.exec('docker', backUpCommandOptions, {})
    .then(handleSuccess)
    .catch(handleError);

  return deferred.promise;
}

function updateSettings(enabled) {
  var data = {remoteLogging: enabled};

  const postOptions = {
    method: 'POST',
    uri: 'http://0.0.0.0:3002/v1/settings/update-remote-logging',
    body: data,
    json: true
  };

  var deferred = q.defer();

  function handleSuccess() {
    deferred.resolve();
  }

  function handleError(error) {
    deferred.reject(error);
  }

  rp(postOptions).then(handleSuccess).catch(handleError);

  return deferred.promise;
}

function cyclePaperTrail(enabled) {
  const options = {
    service: 'papertrail',
    fileName: 'logspout.yml'
  };

  var deferred = q.defer();

  function injectEnabled() {
    return enabled;
  }

  function handleSuccess() {
    deferred.resolve();
  }

  function handleError(error) {
    deferred.reject(error);
  }

  if (enabled) {
    dockerComposeLogic.dockerComposeUpSingleService(options)
      .then(injectEnabled)
      .then(updateSettings)
      .then(handleSuccess)
      .catch(handleError);
  } else {
    dockerComposeLogic.dockerComposeStop(options)
      .then(injectEnabled)
      .then(updateSettings)
      .then(handleSuccess)
      .catch(handleError);
  }

  return deferred.promise;
}

module.exports = {
  start,
  shutdown,
  reset,
  pull,
  restart,
  update,
  createSettingsFile,
  downloadLogs,
  cyclePaperTrail,
};
