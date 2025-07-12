import Task from "../models/taskModel.js";

export const createTask = async (req, res) => {
  try {
    const { text } = req.body;
    if (!text || text.trim() === "") {
      return res.status(400).json({ error: "Task text is required" });
    }

    const task = await Task.create({ text, completed: false });
    res.status(201).json(task);  // ✅ must return the created task
  } catch (error) {
    res.status(500).json({ error: "Failed to create task" });
  }
};
