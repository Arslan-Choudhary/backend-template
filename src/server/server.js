import express from "express";
import { cors, rateLimiter, morgan } from "#middlewares";
import ENV from "#env";
// import fs from "fs";
// import path from "path";

// const logDir = path.join(process.cwd(), "log");

// create logs folder if it doesn't exist
// if (!fs.existsSync(logDir)) {
//   fs.mkdirSync(logDir);
// }

// const accessLogStream = fs.createWriteStream(
//   path.join(logDir, "access.log"),
//   { flags: "a" }
// );

const app = express();

app.use(
  cors({
    origin: ENV.CORS,
    credentials: true,
  }),
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(rateLimiter);

app.use(morgan("dev"));
// app.use(morgan("common", { stream: accessLogStream }));  // Logging to a File (Production)

export default app;
