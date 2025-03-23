import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Chatbot.css"; // Import the CSS file

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [showTyping, setShowTyping] = useState(false);

  // Typing animation before the first message appears
  useEffect(() => {
    setShowTyping(true);
    setTimeout(() => {
      setShowTyping(false);
      setMessages([{ sender: "bot", text: "👋 Hi! How can I assist you today?", timestamp: new Date() }]);
    }, 1500); // Simulating typing delay
  }, []);

  useEffect(() => {
    const chatBox = document.getElementById("chat-box");
    if (chatBox) {
      chatBox.scrollTop = chatBox.scrollHeight;
    }
  }, [messages, showTyping]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input, timestamp: new Date() };
    setMessages([...messages, userMessage]);

    try {
      const res = await axios.post("http://localhost:3000/chat", { message: input });
      setMessages([...messages, userMessage, { sender: "bot", text: res.data.reply, timestamp: new Date() }]);
    } catch (error) {
      setMessages([...messages, userMessage, { sender: "bot", text: "Sorry, I’m having trouble responding!", timestamp: new Date() }]);
    }

    setInput("");
  };

  return (
    <div className="chat-container">
      <div className="chat-header">Employee Wellness Chat</div>

      <div id="chat-box" className="chat-box">
        {showTyping && (
          <div className="chat-message bot-message typing">
            <span className="typing-dots">
              <span>.</span><span>.</span><span>.</span>
            </span>
          </div>
        )}

        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.sender === "user" ? "user-message" : "bot-message"}`}>
            <p className="bot-p">{msg.text}</p>
            <span className="chat-timestamp">{new Date(msg.timestamp).toLocaleTimeString()}</span>
          </div>
        ))}
      </div>

      <div className="chat-input">
        <textarea
          className="input-field"
          rows="1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button className="send-button" onClick={sendMessage}>➤</button>
      </div>
    </div>
  );
};

export default Chatbot;
