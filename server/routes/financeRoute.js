import express from "express";
import { mainFinance } from "../controllers/financeController.js";
const financeRouter = express.Router();


financeRouter.get("/finance", mainFinance)

export default financeRouter