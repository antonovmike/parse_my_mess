import request from "supertest";
import tele_server from "../src/services/telegram_scraper";

jest.mock("../src/services/html-parser", () => ({
  parseTelegramChannel: jest.fn(() =>
    Promise.resolve([
      { message_text: "Test message", datetime: "2026-02-10T07:20:35+00:00" },
    ]),
  ),
}));

describe("tele_server", () => {
  test("Should respond with formatted messages", async () => {
    const res = await request(tele_server).get("/"); // Make sure this route exists on server

    expect(res.statusCode).toBe(200);
    expect(res.text).toContain("Test message");
    expect(res.text).toContain("2026-02-10T07:20:35+00:00");
  });
});
