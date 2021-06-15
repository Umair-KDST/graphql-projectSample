const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  genre: { type: String, required: true },
  authorId: { type: String, required: true },
});

bookSchema.index({ name: "text" });

module.exports = mongoose.model("Book", bookSchema);
