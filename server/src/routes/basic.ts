import express from "express";
import type { Request, Response } from "express";
import tele_server from "../services/telegram_scraper";

const router = express.Router();

// GET / tele_server
router.get("/tele", async (_req: Request, res: Response) => {
  try {
    const messages = await new Promise((_resolve, _reject) => {
      tele_server.emit("request", _req, res);
    });
    res.status(200).json(messages);
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ error: err.message });
  }
});

// GET /hello
router.get("/hello", (_req: Request, res: Response) => {
  res.send("Hello");
});

// GET /status
router.get("/status", (_req: Request, res: Response) => {
  res.json({
    status: "ok",
    uptime: process.uptime().toFixed(2), // Uptime in seconds, rounded to 2 decimal places.
  });
});

export default router;
