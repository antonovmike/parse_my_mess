import express from "express";
import type { Request, Response } from "express";
import tele_server from "../services/telegram_scraper";

const router = express.Router();

// GET / tele_server
router.get("/tele", (_req: Request, res: Response) => {
  tele_server.emit("request", _req, res);
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
