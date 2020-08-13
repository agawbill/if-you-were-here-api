"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

const messageSchema = new _mongoose.Schema({
  who: {
    type: _mongoose.ObjectId,
    ref: "Person",
    required: "{PATH} is required"
  },
  identity: {
    type: _mongoose.ObjectId,
    ref: "Person",
    required: "{PATH} is required"
  },
  message: {
    type: String,
    required: "{PATH} is required"
  },
  flagged: {
    type: Boolean,
    default: false
  },
  approved: {
    type: Boolean,
    default: false
  },
  approvedBy: {
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
const Message = (0, _mongoose.model)("Message", messageSchema);
var _default = Message;
exports.default = _default;