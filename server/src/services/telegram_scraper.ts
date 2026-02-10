import http from "http";

import { parseTelegramChannel } from "./html-parser";
import { TELEGRAM_CHANNEL } from "../serverConfig.js";

const tele_server = http.createServer(async (_req, res) => {
  try {
    const messages = await parseTelegramChannel(TELEGRAM_CHANNEL as string);
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.end(JSON.stringify(messages));
  } catch (error) {
    res.statusCode = 500;
    res.end(JSON.stringify({ error: "Failed to retrieve messages." }));
  }
});

export default tele_server;
