const mongoose = require("mongoose");

const url = `mongodb+srv://sh:root@cluster0.x3otjr7.mongodb.net/test`;

const connectionParams = {};
mongoose
  .connect(url, connectionParams)
  .then(() => {
    console.log("Connected to the database ");
  })
  .catch((err) => {
    console.error(`Boooo`);
  });

module.exports = mongoose;