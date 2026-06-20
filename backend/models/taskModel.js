import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: String,
  userId: String,
  priority: String,
});

const taskModel = mongoose.model("Task", taskSchema);

export default taskModel;
