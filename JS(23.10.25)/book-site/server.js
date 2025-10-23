require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Connect to local MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.error("MongoDB connection error:", err));

// Book schema
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  year: Number
});

const Book = mongoose.model("Book", bookSchema);

// API route to get books
app.get("/books", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    console.error("Error fetching books:", err);
    res.status(500).json({ error: "Failed to fetch books" });
  }
});

// Start server
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
