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

const catSchema = new mongoose.Schema({
  name: { type: String, required: true },
  hasWhiskers: Boolean,
  evil: Boolean,
  length: Number,
});

// This model is similar to a DAO
const catModel = mongoose.model("cats", catSchema);

module.exports = catModel;
