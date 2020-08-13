import express from "express";
import { personsController } from "../controllers/persons.js";
import { utils, ROLES } from "../auth/index.js";

const router = express.Router();

router.get("/", personsController.all);
router.get("/:id", personsController.byId);
router.post(
  "/",
  utils.verifyToken,
  utils.checkIsInRole(ROLES.SUPER_ADMIN, ROLES.ADMIN),
  personsController.create
);
router.put(
  "/:id",
  utils.verifyToken,
  utils.checkIsInRole(ROLES.SUPER_ADMIN, ROLES.ADMIN),
  personsController.update
);
router.patch(
  "/:id",
  utils.verifyToken,
  utils.checkIsInRole(ROLES.SUPER_ADMIN, ROLES.ADMIN),
  personsController.patch
);
router.get("/position/:position", personsController.byPosition);
router.delete(
  "/:id",
  utils.verifyToken,
  utils.checkIsInRole(ROLES.SUPER_ADMIN, ROLES.ADMIN),
  personsController.delete
);

export default router;
