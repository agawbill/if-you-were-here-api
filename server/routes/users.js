import express from "express";
import { usersController } from "../controllers/users.js";
import { utils, ROLES } from "../auth/index.js";

const router = express.Router();

router.get("/", usersController.all);
router.get("/:id", usersController.byId);
router.post(
  "/",
  utils.verifyToken,
  utils.checkIsInRole(ROLES.SUPER_ADMIN, ROLES.ADMIN),
  usersController.create
);
router.put(
  "/:id",
  utils.verifyToken,
  utils.checkIsInRole(ROLES.SUPER_ADMIN, ROLES.ADMIN),
  usersController.update
);
router.patch(
  "/:id",
  utils.verifyToken,
  utils.checkIsInRole(ROLES.SUPER_ADMIN, ROLES.ADMIN),
  usersController.patch
);
router.delete(
  "/:id",
  utils.verifyToken,
  utils.checkIsInRole(ROLES.SUPER_ADMIN, ROLES.ADMIN),
  usersController.delete
);

export default router;
