import passport from "passport";

export const adminController = {
  authenticate(req, res, next) {
    passport.authenticate("jwt", { failureRedirect: "/login" });
  },

  success(req, res, next) {
    return res.status(200);
  },
};
