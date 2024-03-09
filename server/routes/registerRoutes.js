import express from "express";
import { registerUser,getAllUsers } from "../controllers/registerController.js";
const reg_router = express.Router();

reg_router.get("/",getAllUsers);
reg_router.post("/",registerUser);

export default reg_router;