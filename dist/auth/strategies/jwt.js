"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = exports.strategy = void 0;

var _passport = _interopRequireDefault(require("passport"));

var _passportJwt = _interopRequireDefault(require("passport-jwt"));

var _users = require("../../services/users.js");

var _utils = require("../utils.js");

var _keys = _interopRequireDefault(require("../../config/keys.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const JWTStrategy = _passportJwt.default.Strategy;
const userServicesInstance = new _users.UserServices();

const strategy = () => {
  const strategyOptions = {
    jwtFromRequest: req => req.cookies.jwt,
    secretOrKey: _keys.default.JWTSecret,
    passReqToCallback: true
  };

  const verifyCallback = async (req, jwtPayload, cb) => {
    try {
      const user = await userServicesInstance.findUserById(jwtPayload.data._id);
      req.user = user;
      return cb(null, user);
    } catch (err) {
      return cb(err);
    }
  };

  _passport.default.use(new JWTStrategy(strategyOptions, verifyCallback));
};

exports.strategy = strategy;

const login = (req, user) => {
  return new Promise((resolve, reject) => {
    try {
      return resolve((0, _utils.signToken)(user));
    } catch (err) {
      return reject(err);
    }
  });
};

exports.login = login;