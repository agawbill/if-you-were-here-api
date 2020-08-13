import { MessagesServices } from "../services/messages.js";
import messageModel from "../models/Message.js";
import userModel from "../models/User.js";
import personModel from "../models/Person.js";

const messagesServiceInstance = new MessagesServices(
  messageModel,
  userModel,
  personModel
);

messagesServiceInstance.on(
  "messageAdded",
  messagesServiceInstance.sendToSubscribers
);

export const messagesController = {
  async getMessages(req, res, next) {
    try {
      const messages = await messagesServiceInstance.findMessages();
      res.status(200).json({ success: true, data: messages });
    } catch (err) {
      res.status(500).json({ success: false, data: err });
      next(err);
    }
  },
  async byId(req, res, next) {
    try {
      const { id } = req.params;
      const message = await messagesServiceInstance.findMessage(id);
      res.status(200).json({ success: true, data: message });
    } catch (err) {
      res.status(500).json({ success: false, data: err });
      next(err);
    }
  },
  async create(req, res, next) {
    try {
      const { who, identity, message } = req.body;
      const flagged = await messagesServiceInstance.checkFlagged(message);
      const body = { who, identity, message, flagged };
      const newMessage = await messagesServiceInstance.addMessage(body);
      res.status(200).json({ success: true, data: newMessage });
    } catch (err) {
      return res.status(500).json({ success: false, data: err });
    }
  },
  async update(req, res, next) {
    try {
      const { id } = req.params;
      const {
        who,
        identity,
        message,
        flagged,
        approved,
        modifiedBy,
      } = req.body;
      const body = { who, identity, message, flagged, approved, modifiedBy };
      const updatedMessage = await messagesServiceInstance.updateMessage(
        id,
        body
      );
      res.status(200).json({ success: true, data: updatedMessage });
    } catch (err) {
      return res.status(500).json({ success: false, data: err });
    }
  },
  async patch(req, res, next) {
    try {
      const { id } = req.params;
      const body = { ...req.body };
      const patchedMessage = await messagesServiceInstance.patchMessage(
        id,
        body
      );
      res.status(200).json({ success: true, data: patchedMessage });
    } catch (err) {
      return res.status(500).json({ success: false, data: err });
    }
  },
  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const deletedMessage = await messagesServiceInstance.removeMessage(id);
      res.status(200).json({ success: true, data: deletedMessage });
    } catch (err) {
      return res.status(500).json({ success: false, data: err });
    }
  },
};
