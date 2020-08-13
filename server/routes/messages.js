import express from "express";
import { messagesController } from "../controllers/messages.js";
import { utils, ROLES } from "../auth/index.js";

const router = express.Router();

router.get("/", messagesController.getMessages);
router.get("/:id", messagesController.byId);
router.post("/", messagesController.create);
router.put(
  "/:id",
  utils.verifyToken,
  utils.checkIsInRole(ROLES.SUPER_ADMIN, ROLES.ADMIN),
  messagesController.update
);
router.patch(
  "/:id",
  utils.verifyToken,
  utils.checkIsInRole(ROLES.SUPER_ADMIN, ROLES.ADMIN),
  messagesController.patch
);
router.delete(
  "/:id",
  utils.verifyToken,
  utils.checkIsInRole(ROLES.SUPER_ADMIN, ROLES.ADMIN),
  messagesController.delete
);

export default router;
