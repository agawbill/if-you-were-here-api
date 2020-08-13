"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessagesServices = void 0;

var _events = require("events");

var _badWords = _interopRequireDefault(require("bad-words"));

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _googleapis = require("googleapis");

var _keys = _interopRequireDefault(require("../config/keys.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class MessagesServices extends _events.EventEmitter {
  constructor(messageModel, userModel, personModel) {
    super();
    this.messageModel = messageModel;
    this.userModel = userModel;
    this.personModel = personModel;
  }

  async findMessages() {
    try {
      const messages = await this.messageModel.find({}).populate({
        path: "who",
        model: "Person",
        select: "name"
      }).populate({
        path: "identity",
        model: "Person",
        select: "name"
      }).populate({
        path: "approvedBy",
        model: "User",
        select: "email"
      }).populate({
        path: "modifiedBy",
        model: "User",
        select: "email"
      }).sort({
        _id: -1
      });
      return messages;
    } catch (err) {
      throw new Exception(err);
    }
  }

  async findMessage(messageId) {
    try {
      const message = await this.messageModel.findById(messageId).populate({
        path: "who",
        model: "Person",
        select: "name"
      }).populate({
        path: "identity",
        model: "Person",
        select: "name"
      }).populate({
        path: "approvedBy",
        model: "User",
        select: "email"
      }).populate({
        path: "modifiedBy",
        model: "User",
        select: "email"
      });
      return message;
    } catch (err) {
      throw new Exception(err);
    }
  }

  async addMessage(message) {
    try {
      const newMessage = await this.messageModel.create(message);

      if (newMessage) {
        this.emit("messageAdded", newMessage);
      }

      return newMessage;
    } catch (err) {
      throw new Exception(err);
    }
  }

  async updateMessage(messageId, body) {
    try {
      const updatedMessage = await this.messageModel.findOneAndUpdate({
        _id: messageId
      }, body, {
        new: true
      }).populate({
        path: "who",
        model: "Person",
        select: "name"
      }).populate({
        path: "identity",
        model: "Person",
        select: "name"
      }).populate({
        path: "createdBy",
        model: "User",
        select: "email"
      }).populate({
        path: "approvedBy",
        model: "User",
        select: "email"
      }).populate({
        path: "modifiedBy",
        model: "User",
        select: "email"
      });
      return updatedMessage;
    } catch (err) {
      throw new Exception(err);
    }
  }

  async removeMessage(messageId) {
    try {
      const removedMessage = await this.messageModel.findOneAndRemove({
        _id: messageId
      });
      return removedMessage;
    } catch (err) {
      throw new Exception(err);
    }
  }

  async checkFlagged(message) {
    try {
      const filter = new _badWords.default();
      const checkProfane = filter.isProfane(message);
      return checkProfane;
    } catch (err) {
      throw new Exception(err);
    }
  }

  async patchMessage(messageId, body) {
    try {
      const updatedMessage = await this.messageModel.findOneAndUpdate({
        _id: messageId
      }, body, {
        new: true
      }).populate({
        path: "who",
        model: "Person",
        select: "name"
      }).populate({
        path: "identity",
        model: "Person",
        select: "name"
      }).populate({
        path: "approvedBy",
        model: "User",
        select: "email"
      }).populate({
        path: "createdBy",
        model: "User",
        select: "email"
      }).populate({
        path: "modifiedBy",
        model: "User",
        select: "email"
      });
      return updatedMessage;
    } catch (err) {
      throw new Exception(err);
    }
  }

  emailNotification(message, user) {
    const OAuth2 = _googleapis.google.auth.OAuth2;
    const {
      serverApiUrl,
      mailerClientId,
      mailerClientSecret,
      mailerRedirectUrl,
      mailerRefreshToken
    } = _keys.default;
    const {
      firstName,
      email
    } = user;
    const {
      _id,
      flagged
    } = message;
    const checkFlagged = flagged ? "<b>flagged</b>" : "<b>not flagged</b>";
    const oauth2Client = new OAuth2(mailerClientId, mailerClientSecret, mailerRedirectUrl);
    oauth2Client.setCredentials({
      refresh_token: mailerRefreshToken
    });
    const accessToken = oauth2Client.getAccessToken();

    const smtpTransport = _nodemailer.default.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "ifyouwerehere54@gmail.com",
        clientId: mailerClientId,
        clientSecret: mailerClientSecret,
        refreshToken: mailerRefreshToken,
        accessToken
      }
    });

    const mailOptions = {
      from: "ifyouwerehere54@gmail.com",
      to: email,
      subject: `A new message needs approval on If You Were Here. It's ${checkFlagged}.`,
      html: `<p>Hey ${firstName},</p> 
      
      <p>A new message has been posted on "If You Were Here" for you to review, and it's pending approval.</p>
      <p>It's ${checkFlagged}.</p>
      <p>Click the link below to screen and either approve or deny it.</p>
      <a href="${serverApiUrl}/admin/messages/${_id}">${serverApiUrl}/admin/messages/${_id}</a>`
    };
    smtpTransport.sendMail(mailOptions, (error, response) => {
      if (error) {
        throw new Exception(error);
      } else {
        smtpTransport.close();
        return res.send({
          success: "true"
        });
      }
    });
  }

  async sendToSubscribers(message) {
    const subscribedUsers = await this.userModel.find({
      notifications: true,
      providerId: {
        $nin: [null, ""]
      }
    }, "firstName email -_id");

    for (const user of subscribedUsers) {
      await this.emailNotification(message, user);
    }
  }

}

exports.MessagesServices = MessagesServices;