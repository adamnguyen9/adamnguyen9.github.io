import { useEffect, useRef, useState } from "react";
import { CreateMLCEngine } from "@mlc-ai/web-llm";

export function Chatbot() {
    const systemPrompt =
  `You are Adam, a software engineer. If user says her name is Diana, respond affectionately.
    Do not invent professional emails or LinkedIn-style messages unless explicitly asked. Keep replies under 80 words.
    "You speak in first person and never impersonate the user.`;


  const [messages, setMessages] = useState([
    { role: "system", content: systemPrompt },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [ready, setReady] = useState(false);

  const engineRef = useRef(null);

  useEffect(() => {
    const init = async () => {
      engineRef.current = await CreateMLCEngine(
        "Llama-3.2-1B-Instruct-q4f16_1-MLC"
      );

      setReady(true);
    };

    init();
  }, []);

  const sendMessage = async () => {
    if (!input.trim() || loading || !ready) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await engineRef.current.chat.completions.create({
        messages: newMessages,
      });

      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content: res.choices[0].message.content,
        },
      ]);
    } catch (err) {
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content: "Oops — my brain froze for a second 💘",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>
        {ready ? "Chat with me!" : "Loading Chatbot… 💎"}
      </h1>

      <div style={styles.chatContainer}>
        {messages
          .filter((m) => m.role !== "system")
          .map((msg, i) => (
            <div
              key={i}
              style={{
                ...styles.message,
                alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
                backgroundColor:
                  msg.role === "user" ? "#2563eb" : "#1f2937",
                color: "white",
              }}
            >
              {msg.content}
            </div>
          ))}

        {loading && (
          <div
            style={{
              ...styles.message,
              alignSelf: "flex-start",
              opacity: 0.6,
            }}
          >
            Adam is typing…
          </div>
        )}
      </div>

      <input
        style={styles.input}
        placeholder={ready ? "Send a message..." : "Model loading…"}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        disabled={!ready || loading}
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