"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authController = void 0;

var _auth = require("../services/auth.js");

var _users = require("../services/users.js");

var _passport = _interopRequireDefault(require("passport"));

var _User = _interopRequireDefault(require("../models/User.js"));

var _utils = require("../auth/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const authServicesInstance = new _auth.AuthServices(new _users.UserServices());
const userServicesInstance = new _users.UserServices(_User.default);
const authController = {
  checkAuth(req, res, next) {
    return res.status(200).json({
      success: true,
      data: {
        user: req.user
      }
    });
  },

  async login(req, res, next) {
    try {
      const {
        email,
        password
      } = req.body;
      const user = await userServicesInstance.findUserByEmail(email);
      const validatePassword = await (0, _utils.verifyPassword)(password, user.password);

      if (!validatePassword) {
        console.error("Passwords do not match");
        return res.status(500);
        c;
      }

      const token = await authServicesInstance.createToken(req, user);
      return res.status(200).cookie("jwt", token, {
        httpOnly: true
      }).json({
        success: true,
        data: "/"
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        data: "Authentication error!"
      });
    }
  },

  async register(req, res, next) {
    try {
      const {
        firstName,
        lastName,
        email,
        password
      } = req.body;
      const validated = await authServicesInstance.validateUser(email, password);

      if (!validated.success) {
        return res.status(500).json({
          success: false,
          data: validated.data
        });
      }

      const newUser = await userServicesInstance.createUser({
        firstName,
        lastName,
        email,
        password: await (0, _utils.hashPassword)(password)
      });
      const token = await authServicesInstance.createToken(req, newUser);
      return res.status(200).cookie("jwt", token, {
        httpOnly: true
      }).json({
        success: true,
        data: "/"
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        data: err
      });
    }
  },

  google(req, res, next) {
    _passport.default.authenticate("google", {
      session: false,
      scope: ["https://www.googleapis.com/auth/userinfo.profile", "https://www.googleapis.com/auth/userinfo.email"]
    })(req, res, next);
  },

  googleCallback(req, res, next) {
    _passport.default.authenticate("google", {
      session: false,
      failureRedirect: "/admin"
    })(req, res, next);
  },

  googleResponse(req, res, next) {
    return res.status(200).cookie("jwt", (0, _utils.signToken)(req.user), {
      httpOnly: false
    }).redirect("/admin");
  }

};
exports.authController = authController;