import http from "http";

import { telegram_scraper } from "telegram-scraper";
import { TELEGRAM_CHANNEL } from "../serverConfig.js";

// https://t.me/reci_u_koferu
// let telegram_channel = "reci_u_koferu";
let telegram_channel = TELEGRAM_CHANNEL;

console.log("Telegram channel to scrape:", telegram_channel);

const tele_server = http.createServer(async (req, res) => {
  let result = await telegram_scraper(telegram_channel);

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.end(result);
});

export default tele_server;
