"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _persons = require("../controllers/persons.js");

var _index = require("../auth/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.get("/", _persons.personsController.all);
router.get("/:id", _persons.personsController.byId);
router.post("/", _index.utils.verifyToken, _index.utils.checkIsInRole(_index.ROLES.SUPER_ADMIN, _index.ROLES.ADMIN), _persons.personsController.create);
router.put("/:id", _index.utils.verifyToken, _index.utils.checkIsInRole(_index.ROLES.SUPER_ADMIN, _index.ROLES.ADMIN), _persons.personsController.update);
router.patch("/:id", _index.utils.verifyToken, _index.utils.checkIsInRole(_index.ROLES.SUPER_ADMIN, _index.ROLES.ADMIN), _persons.personsController.patch);
router.get("/position/:position", _persons.personsController.byPosition);
router.delete("/:id", _index.utils.verifyToken, _index.utils.checkIsInRole(_index.ROLES.SUPER_ADMIN, _index.ROLES.ADMIN), _persons.personsController.delete);
var _default = router;
exports.default = _default;