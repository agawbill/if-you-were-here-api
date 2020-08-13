import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import keys from "../config/keys.js";
import userModel from "../models/User.js";
import { UserServices } from "../services/users.js";

const userServicesInstance = new UserServices(userModel);

export const checkIsInRole = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.json({ success: false, message: "Not a valid user." });
    }

    const hasRole = roles.find((role) => req.user.role === role);
    if (!hasRole) {
      return res.json({ success: false, message: "Not authorized." });
    }

    return next();
  };
};

export const signToken = (user) => {
  return jwt.sign({ data: user }, keys.JWTSecret, {
    expiresIn: 604800,
  });
};

export const hashPassword = async (password) => {
  if (!password) {
    throw new Error("Password was not provided");
  }

  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

export const verifyPassword = async (candidate, actual) => {
  return await bcrypt.compare(candidate, actual);
};

export const verifyToken = (req, res, next) => {
  const token = req.get("token") || req.body.token || req.query.token;

  if (!token) {
    return res.json({ success: false, message: "No token provided" });
  }
  jwt.verify(token, keys.JWTSecret, async (err, decodedData) => {
    if (err) {
      return res.json({ success: false, message: "Invalid token." });
    }

    const user = await userServicesInstance.findUserById(decodedData.data._id);

    if (!user) {
      return res.json({ success: false, message: "Invalid token." });
    }

    req.user = user;
    return next();
  });
};
