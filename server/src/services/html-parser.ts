import { telegram_scraper } from "telegram-scraper";

import { TelegramMessage } from "../types/telegram.js";

export async function parseTelegramChannel(
  channel: string,
): Promise<TelegramMessage[]> {
  const result = await telegram_scraper(channel);
  const messages: TelegramMessage[] = JSON.parse(result);

  return messages.map((msg: any) => ({
    message_text: msg.message_text,
    datetime: msg.datetime,
  }));
}
