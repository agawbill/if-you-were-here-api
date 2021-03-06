"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.strategy = void 0;

var _passport = _interopRequireDefault(require("passport"));

var _passportGoogleOauth = _interopRequireDefault(require("passport-google-oauth"));

var _keys = _interopRequireDefault(require("../../config/keys.js"));

var _users = require("../../services/users.js");

var _User = _interopRequireDefault(require("../../models/User.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { signToken } from "../utils";
const GoogleStrategy = _passportGoogleOauth.default.OAuth2Strategy;
const userServicesInstance = new _users.UserServices(_User.default);

const strategy = app => {
  const strategyOptions = {
    clientID: _keys.default.googleClientId,
    clientSecret: _keys.default.googleClientSecret,
    callbackURL: `/api/auth/google/callback`
  };

  const verifyCallback = async (accessToken, refreshToken, profile, done) => {
    try {
      const user = await userServicesInstance.getUserByProviderId(profile.id);

      if (user) {
        return done(null, user);
      }
    } catch (err) {
      return done(err);
    }

    const verifiedEmail = profile.emails.find(email => email.verified) || profile.emails[0]; //code to check for greenlit email

    try {
      _passport.default.use;
      const user = await userServicesInstance.findUserByEmail(verifiedEmail.value);

      if (user) {
        const createdUser = await userServicesInstance.updateUser(user._id, {
          provider: profile.provider,
          providerId: profile.id,
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          displayName: profile.displayName,
          email: verifiedEmail.value,
          password: null
        });
        done(null, createdUser);
        return;
      } else {
        done("Your email has not been registered. Contact a Super Admin to have it added, and then attempt to login again.");
        return;
      }
    } catch (err) {
      done(err);
      return;
    }
  };

  _passport.default.use(new GoogleStrategy(strategyOptions, verifyCallback));

  return app;
}; // import passport from "passport";
// import passportGoogle from "passport-google-oauth";
// import keys from "../../config/keys";
// import { UserServices } from "../../services/users";
// import UserModel from "../../models/User";
// import { signToken } from "../utils";
// const GoogleStrategy = passportGoogle.OAuth2Strategy;
// const userServicesInstance = new UserServices(UserModel);
// export const strategy = (app) => {
//   const strategyOptions = {
//     clientID: keys.googleClientId,
//     clientSecret: keys.googleClientSecret,
//     callbackURL: `/api/auth/google/callback`,
//   };
//   const verifyCallback = async (accessToken, refreshToken, profile, done) => {
//     try {
//       const user = await userServicesInstance.getUserByProviderId(profile.id);
//       if (user) {
//         return done(null, user);
//       }
//     } catch (err) {
//       return done(err);
//     }
//     const verifiedEmail =
//       profile.emails.find((email) => email.verified) || profile.emails[0];
//     //code to check for greenlit email
//     try {
//       passport.use;
//       const createdUser = await userServicesInstance.createUser({
//         provider: profile.provider,
//         providerId: profile.id,
//         firstName: profile.name.givenName,
//         lastName: profile.name.familyName,
//         displayName: profile.displayName,
//         email: verifiedEmail.value,
//         password: null,
//       });
//       done(null, createdUser);
//       return;
//     } catch (err) {
//       done(err);
//       return;
//     }
//   };
//   passport.use(new GoogleStrategy(strategyOptions, verifyCallback));
//   return app;
// };


exports.strategy = strategy;