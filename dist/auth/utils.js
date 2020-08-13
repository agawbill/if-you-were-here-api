"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyToken = exports.verifyPassword = exports.hashPassword = exports.signToken = exports.checkIsInRole = void 0;

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _keys = _interopRequireDefault(require("../config/keys.js"));

var _User = _interopRequireDefault(require("../models/User.js"));

var _users = require("../services/users.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const userServicesInstance = new _users.UserServices(_User.default);

const checkIsInRole = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.json({
        success: false,
        message: "Not a valid user."
      });
    }

    const hasRole = roles.find(role => req.user.role === role);

    if (!hasRole) {
      return res.json({
        success: false,
        message: "Not authorized."
      });
    }

    return next();
  };
};

exports.checkIsInRole = checkIsInRole;

const signToken = user => {
  return _jsonwebtoken.default.sign({
    data: user
  }, _keys.default.JWTSecret, {
    expiresIn: 604800
  });
};

exports.signToken = signToken;

const hashPassword = async password => {
  if (!password) {
    throw new Error("Password was not provided");
  }

  const salt = await _bcrypt.default.genSalt(10);
  return await _bcrypt.default.hash(password, salt);
};

exports.hashPassword = hashPassword;

const verifyPassword = async (candidate, actual) => {
  return await _bcrypt.default.compare(candidate, actual);
};

exports.verifyPassword = verifyPassword;

const verifyToken = (req, res, next) => {
  const token = req.get("token") || req.body.token || req.query.token;

  if (!token) {
    return res.json({
      success: false,
      message: "No token provided"
    });
  }

  _jsonwebtoken.default.verify(token, _keys.default.JWTSecret, async (err, decodedData) => {
    if (err) {
      return res.json({
        success: false,
        message: "Invalid token."
      });
    }

    const user = await userServicesInstance.findUserById(decodedData.data._id);

    if (!user) {
      return res.json({
        success: false,
        message: "Invalid token."
      });
    }

    req.user = user;
    return next();
  });
};

exports.verifyToken = verifyToken;