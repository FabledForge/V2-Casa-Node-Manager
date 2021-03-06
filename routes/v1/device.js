const express = require('express');
const router = express.Router();

const applicationLogic = require('logic/application.js');
const auth = require('middlewares/auth.js');
const safeHandler = require('utils/safeHandler');

const DockerPullingError = require('models/errors.js').DockerPullingError;

const PRECONDITION_FAILED = 412;

router.post('/chain-reset', auth.jwt, safeHandler(async(req, res) => {

  // TODO come up with unified strategy on handling resets
  if ((await applicationLogic.getSystemStatus()).resync) {
    return res.status(PRECONDITION_FAILED).json({status: 'bitcoind-already-resetting'});
  } else {

    await applicationLogic.resyncChain();

    return res.json({status: 'chain-reset'});
  }
}));

router.post('/factory-reset', auth.accountJWTProtected, safeHandler((req, res) => {
  applicationLogic.reset();

  return res.json({status: 'factory-reset'});
}));

router.post('/user-reset', auth.accountJWTProtected, safeHandler((req, res) => {
  applicationLogic.userReset();

  return res.json({status: 'user-reset'});
}));

// Use auth.basic for consistency with update manager
router.post('/shutdown', auth.convertReqBodyToBasicAuth, auth.basic,
  safeHandler((req, res) => { // eslint-disable-line arrow-body-style

    return applicationLogic.shutdown()
      .then(() => {
        res.json({status: 'shutdown'});
      })
      .catch(function(error) {
        if (error instanceof DockerPullingError) {
          res.status(PRECONDITION_FAILED).json({
            message: 'Cannot Shutdown. We are downloading new software. Try again in 30 minutes.'
          });
        } else {
          throw error;
        }
      });
  }));

router.post('/update', auth.accountJWTProtected, safeHandler(async(req, res) => {
  await applicationLogic.update();

  return res.json({status: 'updating'});
}));

router.post('/update-build-artifacts', safeHandler(async(req, res) => {
  applicationLogic.updateBuildArtifacts();

  return res.json({status: 'updating'});
}));


router.post('/migration', safeHandler(async(req, res) => {
  await applicationLogic.migration();

  return res.json({status: 'migrating'});
}));

router.get('/migration/status', safeHandler((req, res) =>
  applicationLogic.getMigrationStatus()
    .then(status => res.json({status}))
));

module.exports = router;
