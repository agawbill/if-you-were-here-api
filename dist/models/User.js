"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

const userSchema = new _mongoose.Schema({
  email: String,
  password: String,
  businessName: String,
  firstName: String,
  lastName: String,
  displayName: String,
  providerId: String,
  provider: String,
  notifications: {
    type: Boolean,
    default: true
  },
  role: String,
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
const User = (0, _mongoose.model)("User", userSchema);
var _default = User;
exports.default = _default;