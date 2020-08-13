"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prod = void 0;
const prod = {
  mongoURI: process.env.MONGO_URI,
  serverApiUrl: process.env.SERVER_API_URL,
  JWTSecret: process.env.JWT_SECRET,
  googleClientId: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mailerClientId: process.env.MAILER_CLIENT_ID,
  mailerClientSecret: process.env.MAILER_CLIENT_SECRET,
  mailerRefreshToken: process.env.MAILER_REFRESH_TOKEN,
  mailerRedirectUrl: process.env.MAILER_REDIRECT_URL
};
exports.prod = prod;