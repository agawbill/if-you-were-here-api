"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

const personSchema = new _mongoose.Schema({
  name: {
    type: String,
    required: "{PATH} is required"
  },
  position: {
    type: Number,
    required: "{PATH} is required",
    unique: true
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
const Person = (0, _mongoose.model)("Person", personSchema);
var _default = Person;
exports.default = _default;