
module.exports = {
  PORT: 8000, // You can change this to your desired port number
};

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1/ashutosh")
  .then(() => {
    console.log("db success");
  })
  .catch((e) => {
    console.log("error", e);
  });

module.exports = mongoose;

module.exports.PORT = 8000;
module.exports.mongoDBURL = "mongodb://127.0.0.1/ashutosh";
