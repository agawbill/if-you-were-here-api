"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ROLES", {
  enumerable: true,
  get: function () {
    return _roles.ROLES;
  }
});
exports.strategies = exports.utils = exports.initializeAuthentication = void 0;

var utils = _interopRequireWildcard(require("./utils.js"));

exports.utils = utils;

var strategies = _interopRequireWildcard(require("./strategies/index.js"));

exports.strategies = strategies;

var _roles = require("./roles.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const pipe = (...functions) => args => functions.reduce((arg, fn) => fn(arg), args);

const initializeAuthentication = app => {
  pipe(strategies.GoogleStrategy, strategies.JWTStrategy)(app);
};

exports.initializeAuthentication = initializeAuthentication;