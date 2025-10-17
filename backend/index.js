import dotenv from "dotenv";
dotenv.config();

import path from "path";
import { fileURLToPath } from "url";

// make sure .env is loaded correctly
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, ".env") });


import express from "express";
import fetch from "node-fetch";
import cors from "cors";

console.log("OPENROUTER_API_KEY:", process.env.OPENROUTER_API_KEY ? "Loaded " : "Not Loaded ");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 5000;

app.post("/api/chat", async (req, res) => {
  const userMessage = req.body.message;

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo", // or try "meta-llama/llama-3.1-70b-instruct"
        messages: [{ role: "user", content: userMessage }],
      }),
    });

    const data = await response.json();

    if (!response.ok) throw new Error(data.error?.message || "API error");

    res.json({ reply: data.choices[0].message.content });
  } catch (error) {
    console.error("OpenRouter Error:", error);
    res.status(500).json({ reply: "Sorry, something went wrong!" });
  }
});

app.listen(PORT, () => console.log(` Chatbot backend running on http://localhost:${PORT}`));