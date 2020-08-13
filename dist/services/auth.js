"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthServices = void 0;

var _jwt = require("../auth/strategies/jwt.js");

class AuthServices {
  constructor() {}

  validateUser(email, password) {
    if (!/\b\w+\@\w+\.\w+(?:\.\w+)?\b/.test(email)) {
      return {
        success: false,
        data: "Enter a valid email address."
      };
    } else if (password.length < 5 || password.length > 20) {
      return {
        success: false,
        data: "Password must be between 5 and 20 characters."
      };
    } else {
      return {
        success: true
      };
    }
  }

  async createToken(req, user) {
    try {
      return await (0, _jwt.login)(req, user);
    } catch (err) {
      console.log(err);
      throw new Error("Authentication error!");
    }
  }

}

exports.AuthServices = AuthServices;