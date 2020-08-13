import express from "express";
import { resourcesController } from "../controllers/resources.js";
import { utils, ROLES } from "../auth/index.js";

const router = express.Router();

router.get("/", resourcesController.all);
router.get("/:id", resourcesController.byId);
router.post(
  "/",
  utils.verifyToken,
  utils.checkIsInRole(ROLES.SUPER_ADMIN, ROLES.ADMIN),
  resourcesController.create
);
router.put(
  "/:id",
  utils.verifyToken,
  utils.checkIsInRole(ROLES.SUPER_ADMIN, ROLES.ADMIN),
  resourcesController.update
);
router.patch(
  "/:id",
  utils.verifyToken,
  utils.checkIsInRole(ROLES.SUPER_ADMIN, ROLES.ADMIN),
  resourcesController.patch
);
router.delete(
  "/:id",
  utils.verifyToken,
  utils.checkIsInRole(ROLES.SUPER_ADMIN, ROLES.ADMIN),
  resourcesController.delete
);

export default router;
