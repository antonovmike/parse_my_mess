import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import basicRoutes from "./routes/basic.js";
import telegramRoutes from "./routes/telegramRouts.js";

import logger from "./middleware/logger.js";
import { errorHandler, notFound } from "./middleware/errorHandler.js";

dotenv.config();

const app = express();

// Enable CORS for specified origin and credentials to connect frontend and backend
app.use(cors({ origin: process.env.CLIENT_ORIGIN, credentials: true }));

// Middleware logging each request
app.use(logger);

// Connecting routes
app.use("/", basicRoutes);
app.use("/", telegramRoutes);

// Error handling
app.use(errorHandler);
app.use(notFound);

export default app;
