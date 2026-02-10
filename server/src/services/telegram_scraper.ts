import http from "http";

import { parseTelegramChannel } from "./html-parser";
import { TELEGRAM_CHANNEL } from "../serverConfig.js";

function formattedMessages(
  messages: { message_text: string; datetime: string }[],
): string {
  return messages
    .map((msg) => `${msg.message_text}\n${msg.datetime}`)
    .join("\n\n");
}

const tele_server = http.createServer(async (_req, res) => {
  try {
    const messages = await parseTelegramChannel(TELEGRAM_CHANNEL as string);
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.end(formattedMessages(messages));
  } catch (error) {
    const err = error as Error;
    res.statusCode = 500;
    res.end(JSON.stringify({ error: err.message }));
  }
});

export default tele_server;
