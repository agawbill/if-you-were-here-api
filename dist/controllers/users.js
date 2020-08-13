"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usersController = void 0;

var _users = require("../services/users.js");

var _User = _interopRequireDefault(require("../models/User.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const userServicesInstance = new _users.UserServices(_User.default);
const usersController = {
  async all(req, res, next) {
    try {
      const users = await userServicesInstance.findAll();
      res.status(200).json({
        success: true,
        data: users
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        data: err
      });
      next(err);
    }
  },

  async byId(req, res, next) {
    try {
      const {
        id
      } = req.params;
      const user = await userServicesInstance.findUserById(id);
      res.status(200).json({
        success: true,
        data: user
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        data: err
      });
      next(err);
    }
  },

  async create(req, res, next) {
    try {
      const body = { ...req.body
      };
      const {
        email
      } = req.body; //if it fails check validations

      const validated = userServicesInstance.emailValidations(email);

      if (!validated.success) {
        return res.status(400).json({
          success: false,
          data: validated.message
        });
      }

      const newUser = await userServicesInstance.createUser(body);
      res.status(200).json({
        success: true,
        data: newUser
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        data: err
      });
      next(err);
    }
  },

  async update(req, res, next) {
    try {
      const {
        id
      } = req.params;
      const {
        email
      } = req.body;
      const body = { ...req.body
      };
      const validated = userServicesInstance.emailValidations(email);

      if (!validated.success) {
        return res.status(400).json({
          success: false,
          data: validated.message
        });
      }

      const updatedUser = await userServicesInstance.updateUser(id, body);
      res.status(200).json({
        success: true,
        data: updatedUser
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        data: err
      });
      next(err);
    }
  },

  async patch(req, res, next) {
    try {
      const {
        id
      } = req.params;
      const body = { ...req.body
      };
      const patchedUser = await userServicesInstance.patchUser(id, body);
      res.status(200).json({
        success: true,
        data: patchedUser
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        data: err
      });
      next(err);
    }
  },

  async delete(req, res, next) {
    try {
      const {
        id
      } = req.params;
      const deletedUser = await userServicesInstance.deleteUser(id);
      res.status(200).json({
        success: true,
        data: deletedUser
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        data: err
      });
      next(err);
    }
  }

};
exports.usersController = usersController;