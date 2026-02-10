# parse_my_mess

A simple Telegram channel parser that retrieves channel information and the latest post without the need for a Telegram bot

**Server**

Install packages

```bash
cd server && npm i
```

Add any telegram channel name for testing to service server/.env. Only use the part of the channel name that comes after the `@...` sign or after`https://t.me/...`

```bash
TELEGRAM_CHANNEL_NAME=demo_channel_name
```

Test server

```bash
npm test
```

Run server

```bash
npm run dev
```

Check with curl

```bash
curl http://127.0.0.1:3000/hello
curl http://127.0.0.1:3000/status
```

Check Telegram channel [demo]

```bash
curl http://127.0.0.1:3000/tele
```
