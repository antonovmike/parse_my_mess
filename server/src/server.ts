import express from "express";

import basicRoutes from "./routes/basic.js";
import { notFound } from "./middleware/errorHandler.js";

const app = express();

// Add a JSON parser to make POST requests work
app.use(express.json());

// Connecting routes
app.use("/", basicRoutes);

// Error handling
app.use(notFound);

export default app;
