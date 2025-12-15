import express from "express";
import helmet from "helmet";
import favicon from "serve-favicon";
import path from "path";
import { fileURLToPath } from "url";
import routes from "./routes/index.js";
import errorHandler from "./controllers/error.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(helmet());

app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.use(express.static(path.join(__dirname, "public")));
// to work with render.com's health check endpoint
app.get("/health", (req, res) => res.status(200).send("OK"));

app.use("/api/file", routes);

// otherwise serve the index.html file
// otherwise serve the index.html file
app.get(/(.*)/, (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use((req, res, next) => {
  const err = new Error(`Not Found ${req.url}`);
  err.status = 404;
  next(err);
});

app.use(errorHandler);

export default app;
