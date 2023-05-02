const { Schema, model } = require('mongoose');

const catSchema = new Schema({
  name: { type: String, required: true },
  hasWhiskers: Boolean,
  evil: Boolean,
  length: Number,
});

// This model is similar to a DAO
const catModel = model('cats', catSchema);

module.exports = {
  catModel,
};
