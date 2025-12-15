import express, { Router } from "express";
import cors from "cors";
import { getFileFromDir } from "../controllers/getFileFromDir.js";
import { getFileFromDirValidator } from "../validators/getFileFromDirValidator.js";
import { runAvatarLetterValidation } from "../validators/index.js";

const router = Router();

// route for getting image file itself from public folder
router.get(
  "/:set/:size/:name/:fileType",
  cors({
    origin: "*",
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }),
  getFileFromDirValidator,
  runAvatarLetterValidation,
  express.static("public"),
  getFileFromDir
);

export default router;
