const express = require("express");
const router = express.Router();
const { chatbotReply } = require("../controller/chatbotController");

// define the POST /api/chat route
router.post("/chat", chatbotReply);

// export router
module.exports = router;
