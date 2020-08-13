"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _messages = require("../controllers/messages.js");

var _index = require("../auth/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.get("/", _messages.messagesController.getMessages);
router.get("/:id", _messages.messagesController.byId);
router.post("/", _messages.messagesController.create);
router.put("/:id", _index.utils.verifyToken, _index.utils.checkIsInRole(_index.ROLES.SUPER_ADMIN, _index.ROLES.ADMIN), _messages.messagesController.update);
router.patch("/:id", _index.utils.verifyToken, _index.utils.checkIsInRole(_index.ROLES.SUPER_ADMIN, _index.ROLES.ADMIN), _messages.messagesController.patch);
router.delete("/:id", _index.utils.verifyToken, _index.utils.checkIsInRole(_index.ROLES.SUPER_ADMIN, _index.ROLES.ADMIN), _messages.messagesController.delete);
var _default = router;
exports.default = _default;