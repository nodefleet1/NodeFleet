import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import fetch from "node-fetch";
import cors from "cors";

// Setup basic paths for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({ path: path.join(__dirname, ".env") });

const app = express();
const PORT = 5000;

// Middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Set EJS as view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files (like CSS, JS, images)
app.use(express.static(path.join(__dirname, "public")));

// ROUTES
app.get("/", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  // You can verify username/password here
  res.redirect("/dashboard");
});

app.get("/dashboard", (req, res) => {
  res.render("index");
});

// Chat API Route
console.log("OPENROUTER_API_KEY:", process.env.OPENROUTER_API_KEY ? "Loaded ✅" : "❌ Not Loaded");

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
        model: "gpt-3.5-turbo", // or "meta-llama/llama-3.1-70b-instruct"
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

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
