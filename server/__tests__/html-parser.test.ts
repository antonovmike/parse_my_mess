import { parseTelegramChannel } from "../src/services/html-parser";
import { telegram_scraper } from "telegram-scraper";

jest.mock("telegram-scraper");

describe("parseTelegramChannel", () => {
  it("Should parse messages correctly", async () => {
    const mockResult = JSON.stringify([
      {
        message_text: "Test message 1",
        datetime: "2026-01-24T07:00:26+00:00",
      },
      {
        message_text: "Test message 2",
        datetime: "2026-02-24T07:00:26+00:00",
      },
    ]);

    (telegram_scraper as jest.Mock).mockResolvedValue(mockResult);

    const messages = await parseTelegramChannel("demo_channel");

    expect(messages).toEqual([
      { message_text: "Test message 1", datetime: "2026-01-24T07:00:26+00:00" },
      { message_text: "Test message 2", datetime: "2026-02-24T07:00:26+00:00" },
    ]);
  });

  it("Should handle empty responses", async () => {
    (telegram_scraper as jest.Mock).mockResolvedValue(JSON.stringify([]));

    const messages = await parseTelegramChannel("demo_channel");

    expect(messages).toEqual([]);
  });
});
