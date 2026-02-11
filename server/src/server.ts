import express from "express";

import basicRoutes from "./routes/basic.js";
import telegramRoutes from "./routes/telegramRouts.js";

import logger from "./middleware/logger.js";
import { errorHandler, notFound } from "./middleware/errorHandler.js";

const app = express();

// Middleware logging each request
app.use(logger);

// Connecting routes
app.use("/", basicRoutes);
app.use("/", telegramRoutes);

// Error handling
app.use(errorHandler);
app.use(notFound);

export default app;
