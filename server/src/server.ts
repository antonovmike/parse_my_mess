import express from "express";

import basicRoutes from "./routes/basic.js";

import logger from "./middleware/logger.js";
import { errorHandler, notFound } from "./middleware/errorHandler.js";

const app = express();

// Add a JSON parser to make POST requests work
app.use(express.json());

// Middleware logging each request
app.use(logger);

// Connecting routes
app.use("/", basicRoutes);

// Error handling
app.use(errorHandler);
app.use(notFound);

export default app;
