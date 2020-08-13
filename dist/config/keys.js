"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dev = require("./dev.js");

var _prod = require("./prod.js");

const keys = process.env.NODE_ENV === "production" ? _prod.prod : _dev.dev;
var _default = keys;
exports.default = _default;