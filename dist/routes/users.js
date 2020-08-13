"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _users = require("../controllers/users.js");

var _index = require("../auth/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.get("/", _users.usersController.all);
router.get("/:id", _users.usersController.byId);
router.post("/", _index.utils.verifyToken, _index.utils.checkIsInRole(_index.ROLES.SUPER_ADMIN, _index.ROLES.ADMIN), _users.usersController.create);
router.put("/:id", _index.utils.verifyToken, _index.utils.checkIsInRole(_index.ROLES.SUPER_ADMIN, _index.ROLES.ADMIN), _users.usersController.update);
router.patch("/:id", _index.utils.verifyToken, _index.utils.checkIsInRole(_index.ROLES.SUPER_ADMIN, _index.ROLES.ADMIN), _users.usersController.patch);
router.delete("/:id", _index.utils.verifyToken, _index.utils.checkIsInRole(_index.ROLES.SUPER_ADMIN, _index.ROLES.ADMIN), _users.usersController.delete);
var _default = router;
exports.default = _default;