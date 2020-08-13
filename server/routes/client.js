import express from "express";
import path from "path";
const router = express.Router();

//use /* if breaks
router.get("/*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../../clientBuild", "index.html"));
});

export default router;
