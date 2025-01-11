import express, { Request, Response } from "express";
import { getACause } from "../controllers/get-a-specific-cause";

const router = express.Router();

router.get("/causes/:id", getACause);

export { router as getACauseRouter };
