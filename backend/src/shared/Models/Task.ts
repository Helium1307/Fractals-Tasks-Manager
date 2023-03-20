import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Task", TaskSchema);
