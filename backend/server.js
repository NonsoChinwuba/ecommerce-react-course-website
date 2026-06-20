import dotenv from "dotenv";
dotenv.config();
import dns from "dns/promises";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./db.js";
import userRouter from "./routes/userRoutes.js";
import taskRouter from "./routes/taskRoutes.js";

dns.setServers(["1.1.1.1", "8.8.8.8"]);
const app = express();
const port = process.env.PORT;

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET, POST, PUT, DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);
app.use(cookieParser());
app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/task", taskRouter);

app.use("/api", (req, res) => {
  res.status(200).json({ message: "Hello Express" });
});

app.listen(port, () => {
  connectDB();
  console.log(`App is now running at port ${port}`);
});
