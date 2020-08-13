"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _index = require("../auth/index.js");

var _auth = require("../controllers/auth.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.post("/login", _auth.authController.login);
router.post("/register", _auth.authController.register);
router.get("/google", _auth.authController.google);
router.get("/google/callback", _auth.authController.googleCallback, _auth.authController.googleResponse);
router.post("/verify-token", _index.utils.verifyToken, _auth.authController.checkAuth);
var _default = router;
exports.default = _default;