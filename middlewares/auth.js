const passport = require('passport');
const passportJWT = require('passport-jwt');
const constants = require('utils/const.js');
const NodeError = require('models/errors.js').NodeError;

var JwtStrategy = passportJWT.Strategy;
var ExtractJwt = passportJWT.ExtractJwt;

const JWT_AUTH = 'jwt';

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
  secretOrKey: constants.SHARED_JWT_SECRET
};

passport.serializeUser(function(user, done) {
  return done(null, user.id);
});

passport.use(JWT_AUTH, new JwtStrategy(jwtOptions, function(jwtPayload, done) {
  return done(null, {id: jwtPayload.id});
}));

function jwt(req, res, next) {
  passport.authenticate(JWT_AUTH, {session: false}, function(error, user) {
    if (error || user === false) {
      return next(new NodeError('Invalid JWT', 401)); // eslint-disable-line no-magic-numbers
    }
    req.logIn(user, function(err) {
      if (err) {
        return next(new NodeError('Unable to authenticate', 401)); // eslint-disable-line no-magic-numbers
      }

      return next(null, user);
    });
  })(req, res, next);
}

function dev(req, res, next) {
  req.user = {username: 'dev', password: 'dev', id: 'dev'};

  return next(null, {user: 'dev', password: 'dev', id: 'dev'});
}

if (process.env.ENVIRONMENT === 'DEV') {
  module.exports = {
    jwt: dev,
  };
} else {
  module.exports = {
    jwt,
  };
}
