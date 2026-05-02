import { useEffect, useState } from "react";
import api from "../api/axios";

import type { TelegramMessage } from "../types/telegram";

export default function TelegramPage() {
  const [messages, setMessages] = useState<TelegramMessage[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await api.get("/tele");
        setMessages(response.data);
      } catch (error) {
        console.error("Error fetching data from /tele:", error);
        setError("Failed to fetch messages");
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div>
      {loading && <p>Loading messages...</p>}
      {error && <p>Error: {error}</p>}
      {messages.length > 0 ? (
        messages.map((msg, index) => (
          <div key={index} className="message">
            <p>{msg.message_text}</p>
            {msg.message_photo &&
              msg.message_photo.map((photo, photoIndex) => (
                <img
                  key={photoIndex}
                  src={photo}
                  alt={`Фото ${photoIndex + 1}`}
                />
              ))}
            <p></p>
            {msg.message_video &&
              msg.message_video.map((video, videoIndex) => (
                <video
                  key={`video-${videoIndex}`}
                  src={video}
                  controls
                  style={{ maxWidth: "100%", marginBottom: "10px" }}
                />
              ))}
            <p></p>
            <span>{new Date(msg.datetime).toLocaleString()}</span>
          </div>
        ))
      ) : (
        <p>No messages to display.</p>
      )}
    </div>
  );
}
