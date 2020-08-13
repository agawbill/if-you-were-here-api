import { AuthServices } from "../services/auth.js";
import { UserServices } from "../services/users.js";
import passport from "passport";
import userModel from "../models/User.js";
import { verifyPassword, hashPassword, signToken } from "../auth/utils.js";

const authServicesInstance = new AuthServices(new UserServices());
const userServicesInstance = new UserServices(userModel);

export const authController = {
  checkAuth(req, res, next) {
    return res.status(200).json({ success: true, data: { user: req.user } });
  },
  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await userServicesInstance.findUserByEmail(email);
      const validatePassword = await verifyPassword(password, user.password);
      if (!validatePassword) {
        console.error("Passwords do not match");
        return res.status(500);
        c;
      }
      const token = await authServicesInstance.createToken(req, user);
      return res
        .status(200)
        .cookie("jwt", token, {
          httpOnly: true,
        })
        .json({
          success: true,
          data: "/",
        });
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ success: false, data: "Authentication error!" });
    }
  },
  async register(req, res, next) {
    try {
      const { firstName, lastName, email, password } = req.body;
      const validated = await authServicesInstance.validateUser(
        email,
        password
      );
      if (!validated.success) {
        return res.status(500).json({ success: false, data: validated.data });
      }
      const newUser = await userServicesInstance.createUser({
        firstName,
        lastName,
        email,
        password: await hashPassword(password),
      });
      const token = await authServicesInstance.createToken(req, newUser);
      return res
        .status(200)
        .cookie("jwt", token, {
          httpOnly: true,
        })
        .json({
          success: true,
          data: "/",
        });
    } catch (err) {
      return res.status(500).json({ success: false, data: err });
    }
  },
  google(req, res, next) {
    passport.authenticate("google", {
      session: false,
      scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
      ],
    })(req, res, next);
  },
  googleCallback(req, res, next) {
    passport.authenticate("google", {
      session: false,
      failureRedirect: "/admin",
    })(req, res, next);
  },
  googleResponse(req, res, next) {
    return res
      .status(200)
      .cookie("jwt", signToken(req.user), {
        httpOnly: false,
      })
      .redirect("/admin");
  },
};
