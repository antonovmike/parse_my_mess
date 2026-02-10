import { telegram_scraper } from "telegram-scraper";

interface TelegramMessage {
  message_text: string;
  datetime: string;
}

export async function parseTelegramChannel(
  channel: string,
): Promise<TelegramMessage[]> {
  const result = await telegram_scraper(channel);
  const messages = JSON.parse(result);

  return messages;
}
