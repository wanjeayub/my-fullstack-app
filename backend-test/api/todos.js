const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: [""],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI);

// Define a schema and model
const todoSchema = new mongoose.Schema({
  text: String,
  completed: Boolean,
});

const ToDo = mongoose.model("ToDo", todoSchema);

// Get all to-dos
app.get("/api/todos", async (req, res) => {
  const todos = await ToDo.find();
  res.json(todos);
});

// Add a new to-do
app.post("/api/todos", async (req, res) => {
  const newToDo = new ToDo({
    text: req.body.text,
    completed: req.body.completed,
  });
  await newToDo.save();
  res.json(newToDo);
});

// Update a to-do
app.put("/api/todos/:id", async (req, res) => {
  const updatedToDo = await ToDo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updatedToDo);
});

// Delete a to-do
app.delete("/api/todos/:id", async (req, res) => {
  await ToDo.findByIdAndDelete(req.params.id);
  res.json({ message: "To-Do deleted" });
});

module.exports = app;
