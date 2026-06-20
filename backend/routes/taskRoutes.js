import express from "express";
import {
  addNewTask,
  getAllTasksByUser,
} from "../controllers/taskController.js";

const taskRouter = express.Router();

taskRouter.post("/add", addNewTask);
taskRouter.get("/task/:id", getAllTasksByUser);

export default taskRouter;
