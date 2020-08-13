"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.adminController = void 0;

var _passport = _interopRequireDefault(require("passport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const adminController = {
  authenticate(req, res, next) {
    _passport.default.authenticate("jwt", {
      failureRedirect: "/login"
    });
  },

  success(req, res, next) {
    return res.status(200);
  }

};
exports.adminController = adminController;