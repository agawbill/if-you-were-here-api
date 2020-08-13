import * as utils from "./utils.js";
import * as strategies from "./strategies/index.js";
import { ROLES } from "./roles.js";

const pipe = (...functions) => (args) =>
  functions.reduce((arg, fn) => fn(arg), args);

const initializeAuthentication = (app) => {
  pipe(strategies.GoogleStrategy, strategies.JWTStrategy)(app);
};

export { utils, initializeAuthentication, strategies, ROLES };
