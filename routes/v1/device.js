const express = require('express');
const router = express.Router();

const applicationLogic = require('logic/application.js');
const validator = require('utils/validator.js');
const auth = require('middlewares/auth.js');
const safeHandler = require('utils/safeHandler');

router.post('/chain-reset', auth.jwt, safeHandler((req, res) => {
  applicationLogic.reset();

  return res.json({status: 'chain-reset'});
}));

router.post('/factory-reset', auth.jwt, safeHandler((req, res) => {
  applicationLogic.reset(true);

  return res.json({status: 'factory-reset'});
}));

router.post('/user-reset', auth.accountJWTProtected, safeHandler((req, res) => {
  applicationLogic.userReset();

  return res.json({status: 'user-reset'});
}));

// Use auth.basic for consistency with update manager
router.post('/shutdown', auth.basic, safeHandler((req, res) => { // eslint-disable-line arrow-body-style
  return applicationLogic.shutdown()
    .then(() => {
      res.json({status: 'shutdown'});
    });
}));

router.post('/update', auth.jwt, safeHandler((req, res, next) => {
  const services = req.body.services;

  for (const service of services) {
    try {
      validator.isUpdatableService(service);
    } catch (error) {
      return next(error);
    }
  }

  return applicationLogic.update(services)
    .then(applicationNames => res.json(applicationNames));
}));

module.exports = router;
