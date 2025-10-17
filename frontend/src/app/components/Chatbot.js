"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Chatbot({ darkMode = false }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi 👋 I'm your assistant. How can I help you?" },
  ]);
  const [input, setInput] = useState("");

  //  Replaced with backend-connected async function
  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    const userText = input;
    setInput("");

    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userText }),
      });

      if (!res.ok) throw new Error("Backend error");
      const data = await res.json();

      const botMessage = {
        sender: "bot",
        text: data.reply || "No response from AI 🤖",
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error fetching reply:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "⚠️ Sorry, something went wrong!" },
      ]);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Chat Button */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-blue-500 text-white rounded-full p-4 shadow-lg hover:bg-blue-600 transition"
      >
        {open ? "✖" : "💬"}
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className={`absolute bottom-16 right-0 w-80 shadow-xl rounded-2xl overflow-hidden border 
              ${darkMode ? "bg-gray-900 text-white border-gray-700" : "bg-white text-black border-gray-200"}`}
          >
            {/* Header */}
            <div
              className={`px-4 py-2 font-bold ${
                darkMode ? "bg-gray-800 text-white" : "bg-blue-500 text-white"
              }`}
            >
              Chatbot
            </div>

            {/* Messages */}
            <div className="h-64 overflow-y-auto p-3 space-y-2 text-sm">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`p-2 rounded-lg max-w-[80%] ${
                    msg.sender === "user"
                      ? darkMode
                        ? "bg-blue-700 ml-auto text-right text-white"
                        : "bg-blue-100 ml-auto text-right"
                      : darkMode
                      ? "bg-gray-700 text-left text-white"
                      : "bg-gray-200 text-left"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Input */}
            <div
              className={`flex border-t ${
                darkMode ? "border-gray-700" : "border-gray-200"
              }`}
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                className={`flex-1 px-3 py-2 text-sm outline-none ${
                  darkMode
                    ? "bg-gray-900 text-white placeholder-gray-400"
                    : "bg-white text-black"
                }`}
                placeholder="Type a message..."
              />
              <button
                onClick={sendMessage}
                className={`px-4 text-sm ${
                  darkMode
                    ? "bg-gray-800 text-white hover:bg-gray-700"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
