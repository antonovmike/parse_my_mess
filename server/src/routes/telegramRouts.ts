import express from "express";
import type { Request, Response } from "express";
import tele_server from "../services/telegram_scraper";

const router = express.Router();

// GET / tele
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

export default router;
