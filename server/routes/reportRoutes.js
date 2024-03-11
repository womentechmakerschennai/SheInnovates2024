import express from "express";
import { addReports, getReports } from "../controllers/reportController.js";
const reportRouter = express.Router();

reportRouter.get("/", getReports);
reportRouter.post("/", addReports);

export default reportRouter;
