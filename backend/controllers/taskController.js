import taskModel from "../models/taskModel.js";
import { addNewTaskSchema } from "../validation/taskValidation.js";

// add a new task
export const addNewTask = async (req, res) => {
  const { title, description, status, userId, priority } = req.body;

  // validate schema
  const { error } = addNewTaskSchema.validate({
    title,
    description,
    status,
    userId,
    priority,
  });

  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message,
    });
  }

  try {
    const newlyCreatedTask = await taskModel.create({
      title,
      description,
      status,
      userId,
      priority,
    });

    if (newlyCreatedTask) {
      return res.status(200).json({
        success: true,
        messsage: "Task added successfully",
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Failed to add task",
      });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: "Some error occurrd",
    });
  }
};

// get all tasks by user
export const getAllTasksByUser = async (req, res) => {
  try {
    // get user's id
    const { id } = req.params;

    const tasksByUserId = await taskModel.find({ userId: id });

    if (tasksByUserId) {
      return res.status(200).json({
        success: true,
        tasksList: tasksByUserId,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Failed to get tasks",
      });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      success: false,
      message: "Some error occurrd",
    });
  }
};

// edit task
export const updateTask = async (req, res) => {};
// delete task
