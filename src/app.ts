import express from "express";
import cors, { CorsOptions } from "cors";
import dotenv from "dotenv";

import { CORS_ORIGIN } from "./constants";

// CONFIGS
dotenv.config();

const corsConfig: CorsOptions = {
  origin: CORS_ORIGIN,
  credentials: true,
};

const jsonConfig = { limit: "16kb" };

const urlencodedConfig = { extended: true };

// EXPRESS APP
const app = express();

// MIDDLEWARES
app.use(cors(corsConfig));
app.use(express.json(jsonConfig));
app.use(express.urlencoded(urlencodedConfig));
app.use(express.static("public"));

export default app;
