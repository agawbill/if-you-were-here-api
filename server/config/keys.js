import { dev } from "./dev.js";
import { prod } from "./prod.js";

const keys = process.env.NODE_ENV === "production" ? prod : dev;

export default keys;
