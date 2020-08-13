"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

const resourceSchema = new _mongoose.Schema({
  title: {
    type: String,
    required: "{PATH} is required"
  },
  url: {
    type: String,
    required: "{PATH} is required"
  },
  description: {
    type: String,
    required: "{PATH} is required"
  },
  createdBy: {
    type: _mongoose.ObjectId,
    ref: "User",
    default: null
  },
  modifiedBy: {
    type: _mongoose.ObjectId,
    ref: "User",
    default: null
  }
}, {
  timestamps: true
});
const Resource = (0, _mongoose.model)("Resource", resourceSchema);
var _default = Resource;
exports.default = _default;