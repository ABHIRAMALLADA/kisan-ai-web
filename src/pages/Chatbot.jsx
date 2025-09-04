import React, { useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // ✅ Text-to-Speech (TTS)
  function speak(text, lang = "te-IN") { // Telugu by default
    const msg = new SpeechSynthesisUtterance(text);
    msg.lang = lang;
    window.speechSynthesis.speak(msg);
  }

  // ✅ Speech-to-Text (STT)
  function startListening() {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Speech Recognition not supported in this browser");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "te-IN"; // Telugu (change to hi-IN for Hindi, en-IN for English)
    recognition.start();

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript); // put recognized speech into input box
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
    };
  }

  // ✅ Handle Send (text or voice input)
  function handleSend() {
    if (!input.trim()) return;

    // Add user message
    const newMessages = [...messages, { sender: "user", text: input }];

    // Example bot reply (later you can replace with real AI)
    let reply = "ఇది ఒక నమూనా జవాబు. (This is a sample reply)";
    const updatedMessages = [...newMessages, { sender: "bot", text: reply }];

    setMessages(updatedMessages);
    setInput("");

    // Speak the reply (TTS)
    speak(reply, "te-IN");
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>🌱 Kisan AI Chatbot (with Voice)</h2>

      <div
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          height: "200px",
          overflowY: "scroll",
          marginBottom: "10px",
        }}
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              textAlign: msg.sender === "user" ? "right" : "left",
              margin: "5px 0",
            }}
          >
            <b>{msg.sender === "user" ? "👨 Farmer" : "🤖 Bot"}:</b>{" "}
            {msg.text}
          </div>
        ))}
      </div>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type or speak your message..."
        style={{ width: "70%", marginRight: "5px" }}
      />
      <button onClick={handleSend}>Send</button>
      <button onClick={startListening} style={{ marginLeft: "5px" }}>
        🎤 Speak
      </button>
    </div>
  );
}
