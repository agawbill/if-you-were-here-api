import passport from "passport";
import passportJWT from "passport-jwt";
import { UserServices } from "../../services/users.js";
import { signToken } from "../utils.js";
import keys from "../../config/keys.js";

const JWTStrategy = passportJWT.Strategy;
const userServicesInstance = new UserServices();

export const strategy = () => {
  const strategyOptions = {
    jwtFromRequest: (req) => req.cookies.jwt,
    secretOrKey: keys.JWTSecret,
    passReqToCallback: true,
  };

  const verifyCallback = async (req, jwtPayload, cb) => {
    try {
      const user = await userServicesInstance.findUserById(jwtPayload.data._id);
      req.user = user;
      return cb(null, user);
    } catch (err) {
      return cb(err);
    }
  };

  passport.use(new JWTStrategy(strategyOptions, verifyCallback));
};

export const login = (req, user) => {
  return new Promise((resolve, reject) => {
    try {
      return resolve(signToken(user));
    } catch (err) {
      return reject(err);
    }
  });
};
