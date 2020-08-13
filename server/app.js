import express from "express";
import path from "path";
import logger from "morgan";
import mongoose from "mongoose";
import { urlencoded, json } from "body-parser";
import passport from "passport";
import keys from "./config/keys.js";
import clientRouter from "./routes/client.js";
import adminRouter from "./routes/admin.js";
import authRouter from "./routes/auth.js";
import messagesRouter from "./routes/messages.js";
import personsRouter from "./routes/persons.js";
import resourcesRouter from "./routes/resources.js";
import usersRouter from "./routes/users.js";
import { initializeAuthentication } from "./auth/index.js";

const app = express();

mongoose.connect(keys.mongoURI, {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  autoIndex: false,
  poolSize: 10,
  bufferMaxEntries: 0,
});

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(passport.initialize());
app.use("/admin", express.static(path.join(__dirname, "../adminBuild")));
app.use(express.static(path.join(__dirname, "../clientBuild")));

initializeAuthentication(app);

app.use("/api/resources", resourcesRouter);
app.use("/api/persons", personsRouter);
app.use("/api/messages", messagesRouter);
app.use("/api/users", usersRouter);
app.use("/api/auth", authRouter);
app.use("/admin/*", adminRouter);
app.use("/*", clientRouter);

export default app;
