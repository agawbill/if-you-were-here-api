import { EventEmitter } from "events";
import Filter from "bad-words";
import nodemailer from "nodemailer";
import { google } from "googleapis";
import keys from "../config/keys.js";

export class MessagesServices extends EventEmitter {
  constructor(messageModel, userModel, personModel) {
    super();
    this.messageModel = messageModel;
    this.userModel = userModel;
    this.personModel = personModel;
  }

  async findMessages() {
    try {
      const messages = await this.messageModel
        .find({})
        .populate({ path: "who", model: "Person", select: "name" })
        .populate({ path: "identity", model: "Person", select: "name" })
        .populate({ path: "approvedBy", model: "User", select: "email" })
        .populate({ path: "modifiedBy", model: "User", select: "email" })
        .sort({ _id: -1 });
      return messages;
    } catch (err) {
      throw new Exception(err);
    }
  }

  async findMessage(messageId) {
    try {
      const message = await this.messageModel
        .findById(messageId)
        .populate({ path: "who", model: "Person", select: "name" })
        .populate({ path: "identity", model: "Person", select: "name" })
        .populate({ path: "approvedBy", model: "User", select: "email" })
        .populate({ path: "modifiedBy", model: "User", select: "email" });
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
      const updatedMessage = await this.messageModel
        .findOneAndUpdate({ _id: messageId }, body, { new: true })
        .populate({ path: "who", model: "Person", select: "name" })
        .populate({ path: "identity", model: "Person", select: "name" })
        .populate({ path: "createdBy", model: "User", select: "email" })
        .populate({ path: "approvedBy", model: "User", select: "email" })
        .populate({ path: "modifiedBy", model: "User", select: "email" });
      return updatedMessage;
    } catch (err) {
      throw new Exception(err);
    }
  }

  async removeMessage(messageId) {
    try {
      const removedMessage = await this.messageModel.findOneAndRemove({
        _id: messageId,
      });
      return removedMessage;
    } catch (err) {
      throw new Exception(err);
    }
  }

  async checkFlagged(message) {
    try {
      const filter = new Filter();
      const checkProfane = filter.isProfane(message);
      return checkProfane;
    } catch (err) {
      throw new Exception(err);
    }
  }

  async patchMessage(messageId, body) {
    try {
      const updatedMessage = await this.messageModel
        .findOneAndUpdate({ _id: messageId }, body, { new: true })
        .populate({ path: "who", model: "Person", select: "name" })
        .populate({ path: "identity", model: "Person", select: "name" })
        .populate({ path: "approvedBy", model: "User", select: "email" })
        .populate({ path: "createdBy", model: "User", select: "email" })
        .populate({ path: "modifiedBy", model: "User", select: "email" });
      return updatedMessage;
    } catch (err) {
      throw new Exception(err);
    }
  }

  emailNotification(message, user) {
    const OAuth2 = google.auth.OAuth2;
    const {
      serverApiUrl,
      mailerClientId,
      mailerClientSecret,
      mailerRedirectUrl,
      mailerRefreshToken,
    } = keys;

    const { firstName, email } = user;
    const { _id, flagged } = message;

    const checkFlagged = flagged ? "<b>flagged</b>" : "<b>not flagged</b>";

    const oauth2Client = new OAuth2(
      mailerClientId,
      mailerClientSecret,
      mailerRedirectUrl
    );

    oauth2Client.setCredentials({
      refresh_token: mailerRefreshToken,
    });
    const accessToken = oauth2Client.getAccessToken();

    const smtpTransport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "ifyouwerehere54@gmail.com",
        clientId: mailerClientId,
        clientSecret: mailerClientSecret,
        refreshToken: mailerRefreshToken,
        accessToken,
      },
    });

    const mailOptions = {
      from: "ifyouwerehere54@gmail.com",
      to: email,
      subject: `A new message needs approval on If You Were Here. It's ${checkFlagged}.`,
      html: `<p>Hey ${firstName},</p> 
      
      <p>A new message has been posted on "If You Were Here" for you to review, and it's pending approval.</p>
      <p>It's ${checkFlagged}.</p>
      <p>Click the link below to screen and either approve or deny it.</p>
      <a href="${serverApiUrl}/admin/messages/${_id}">${serverApiUrl}/admin/messages/${_id}</a>`,
    };

    smtpTransport.sendMail(mailOptions, (error, response) => {
      if (error) {
        throw new Exception(error);
      } else {
        smtpTransport.close();
        return res.send({ success: "true" });
      }
    });
  }

  async sendToSubscribers(message) {
    const subscribedUsers = await this.userModel.find(
      { notifications: true, providerId: { $nin: [null, ""] } },
      "firstName email -_id"
    );
    for (const user of subscribedUsers) {
      await this.emailNotification(message, user);
    }
  }
}
