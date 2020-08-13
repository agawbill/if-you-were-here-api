import express from "express";
import { utils, ROLES } from "../auth/index.js";
import { authController } from "../controllers/auth.js";

const router = express.Router();

router.post("/login", authController.login);
router.post("/register", authController.register);
router.get("/google", authController.google);
router.get(
  "/google/callback",
  authController.googleCallback,
  authController.googleResponse
);
router.post("/verify-token", utils.verifyToken, authController.checkAuth);

export default router;
