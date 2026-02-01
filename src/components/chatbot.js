import { useState } from "react";

export function Chatbot() {

  const text = "You are Adam, a software engineer. Your girlfriend is Diana and it's Valentine's Day. Compliment user as much as possible and how lovely they are."
  const [messages, setMessages] = useState([
    { role: "system", content: text }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
  if (!input.trim() || loading) return;

  const newMessages = [...messages, { role: "user", content: input }];
  setMessages(newMessages);
  setInput("");
  setLoading(true);

    const OPENROUTER_API_KEY = "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"; 

  try {
    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
        "HTTP-Referer": window.location.origin,
        "X-Title": "React Chatbot",
      },
      body: JSON.stringify({
        model: "openai/gpt-4o-mini",
        messages: newMessages,
      }),
    });

    const data = await res.json();

    setMessages([
      ...newMessages,
      {
        role: "assistant",
        content: data.choices?.[0]?.message?.content || "No response",
      },
    ]);
  } catch (err) {
    setMessages([
      ...newMessages,
      {
        role: "assistant",
        content: "Something went wrong.",
      },
    ]);
  } finally {
    setLoading(false);
  }
};



  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Chat with me!</h1>

      <div style={styles.chatContainer}>
        {messages
          .filter(m => m.role !== "system")
          .map((msg, i) => (
            <div
              key={i}
              style={{
                ...styles.message,
                alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
                backgroundColor:
                  msg.role === "user" ? "#2563eb" : "#1f2937",
                color: "white"
              }}
            >
              {msg.content}
            </div>
          ))}

        {loading && (
          <div style={{ ...styles.message, alignSelf: "flex-start", opacity: 0.6 }}>
            Adam is typing…
          </div>
        )}
      </div>

      <input
        style={styles.input}
        placeholder="Send a message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        disabled={loading}
      />
    </div>
  );
}

const styles = {
  page: {
    height: "100vh",
    backgroundColor: "#0f172a",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "1.5rem",
    fontFamily: "system-ui, sans-serif"
  },
  title: {
    color: "white",
    marginBottom: "1rem"
  },
  chatContainer: {
    width: "100%",
    maxWidth: "720px",
    flex: 1,
    backgroundColor: "#020617",
    borderRadius: "12px",
    padding: "1rem",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem"
  },
  message: {
    maxWidth: "75%",
    padding: "0.75rem 1rem",
    borderRadius: "14px",
    lineHeight: 1.5,
    fontSize: "0.95rem",
    whiteSpace: "pre-wrap"
  },
  input: {
    width: "100%",
    maxWidth: "720px",
    marginTop: "1rem",
    marginBottom: "1.5rem",
    padding: "0.75rem 1rem",
    borderRadius: "10px",
    border: "none",
    outline: "none",
    fontSize: "1rem",
    backgroundColor: "#020617",
    color: "white"
  }
};