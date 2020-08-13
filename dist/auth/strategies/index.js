"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "JWTStrategy", {
  enumerable: true,
  get: function () {
    return _jwt.strategy;
  }
});
Object.defineProperty(exports, "GoogleStrategy", {
  enumerable: true,
  get: function () {
    return _google.strategy;
  }
});

var _jwt = require("./jwt.js");

var _google = require("./google.js");