var Docker = require('dockerode');
var docker = new Docker();
var q = require('q');


function getDigestFromPullOutput(events) {
  var digest = '';

  for(var i = 0; i < events.length; i++) {

    if(events[i].status.includes("Digest")) {
      //example status
      //'Digest: sha256:9e347affc725efd3bfe95aa69362cf833aa810f84e6cb9eed1cb65c35216632a'
      digest = events[i].status.split(' ')[1];
    }
  }
  return digest;
}

function getImage(digest) {

  var deferred = q.defer();

  function returnImage(images) {
    for(var i = 0; i < images.length; i++) {
      for(var j = 0; images[i].RepoDigests && j < images[i].RepoDigests.length; j++) {
        if(images[i].RepoDigests[j].includes(digest)) {
          deferred.resolve(images[i]);
        }
      }
    }

    deferred.reject('image not found: '+ imageId);
  }

  listImages()
    .then(returnImage);

  return deferred.promise;
}

function pullImage(applicationName) {
  var deferred = q.defer();

  docker.pull(applicationName, function (error, stream) {
    // streaming output from pull...

    if(error)  {
      deferred.reject(error);
    } else {

      docker.modem.followProgress(stream, onFinished, onProgress);

      function onFinished(err, output) {
        if(err) {
          console.log("error")
        }

        var digest = getDigestFromPullOutput(output);

        //todo what happens on timeout?
        deferred.resolve(digest);
      }
      function onProgress(event) {
        //console.log(event);
      }


    }
  });

  return deferred.promise;
}

function listImages() {
  var deferred = q.defer();

  docker.listImages(function (error, images) {

    if (error) {
      deferred.reject(error);
    } else {
      deferred.resolve(images);
    }
  });

  return deferred.promise;
}

function runImage(image) {
  var deferred = q.defer();

  var id = image.Id.split('sha256:')[1];

  docker.createContainer({
    Image: id,
    AttachStdin: false,
    AttachStdout: true,
    AttachStderr: true,
    Tty: true,
    Cmd: ['/bin/bash'],
    OpenStdin: false,
    StdinOnce: false
  }).then(function(container) {
    deferred.resolve(container.start());
  }).catch(function(error) {
    console.log(error);
    deferred.reject(error);
  });

  return deferred.promise;
}

module.exports = {
  getImage: getImage,
  pullImage: pullImage,
  runImage: runImage
};