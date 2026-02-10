import dotenv from "dotenv";

dotenv.config();
console.log("server/src/serverConfig.ts\n" + process.env.TELEGRAM_CHANNEL_NAME);

export const TELEGRAM_CHANNEL = process.env.TELEGRAM_CHANNEL_NAME;
