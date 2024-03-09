// Importing necessary modules
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import reportRouter from "./routes/reportRoutes.js";
import bodyParser from "body-parser";
dotenv.config();
const app = express();
const port = 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/reports", reportRouter);
mongoose.connect(process.env.MONGODB_URI, {});
app.listen(port, "10.15.1.230", () => {
  console.log(`Server is running on port ${port}`);
});
