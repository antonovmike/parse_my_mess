export interface TelegramMessage {
  message_text: string;
  datetime: string;
  user_name?: string;
  user_url?: string;
  user_photo?: string;
  message_url?: string;
  message_photo?: string[];
  message_video?: string[];
  views?: number;
}
