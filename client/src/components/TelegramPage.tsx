import { useEffect, useState } from "react";
import api from "../api/axios";

export default function TelegramPage() {
  const [messages, setMessages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await api.get("/tele");
        setMessages(response.data.split("\n"));
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
        messages.map((message, index) => <p key={index}>{message}</p>)
      ) : (
        <p>No messages to display.</p>
      )}
    </div>
  );
}
