import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 5000;

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
    // For now, just redirect to index
    res.redirect("/dashboard");
});

app.get("/dashboard", (req, res) => {
    res.render("index");
});

app.use(express.urlencoded({ extended: true }));

// Start server
app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});
app.use(express.static("public"));
