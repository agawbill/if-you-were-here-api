"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _morgan = _interopRequireDefault(require("morgan"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bodyParser = require("body-parser");

var _passport = _interopRequireDefault(require("passport"));

var _keys = _interopRequireDefault(require("./config/keys.js"));

var _client = _interopRequireDefault(require("./routes/client.js"));

var _admin = _interopRequireDefault(require("./routes/admin.js"));

var _auth = _interopRequireDefault(require("./routes/auth.js"));

var _messages = _interopRequireDefault(require("./routes/messages.js"));

var _persons = _interopRequireDefault(require("./routes/persons.js"));

var _resources = _interopRequireDefault(require("./routes/resources.js"));

var _users = _interopRequireDefault(require("./routes/users.js"));

var _index = require("./auth/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();

_mongoose.default.connect(_keys.default.mongoURI, {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  autoIndex: false,
  poolSize: 10,
  bufferMaxEntries: 0
});

app.use((0, _morgan.default)("dev"));
app.use((0, _bodyParser.json)());
app.use((0, _bodyParser.urlencoded)({
  extended: true
}));
app.use(_passport.default.initialize());
app.use("/admin", _express.default.static(_path.default.join(__dirname, "../adminBuild")));
app.use(_express.default.static(_path.default.join(__dirname, "../clientBuild")));
(0, _index.initializeAuthentication)(app);
app.use("/api/resources", _resources.default);
app.use("/api/persons", _persons.default);
app.use("/api/messages", _messages.default);
app.use("/api/users", _users.default);
app.use("/api/auth", _auth.default);
app.use("/admin/*", _admin.default);
app.use("/*", _client.default);
var _default = app;
exports.default = _default;