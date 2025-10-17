exports.chatbotReply = (req, res) => {
  const userMessage = req.body.message;

  let reply;
  if (userMessage.toLowerCase().includes("hello")) {
    reply = "Hi there! How can I help you today?";
  } else if (userMessage.toLowerCase().includes("bye")) {
    reply = "Goodbye! Have a great day!";
  } else {
    reply = "I'm just a demo bot, but I'm learning!";
  }

  res.json({ reply });
};
