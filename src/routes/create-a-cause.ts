import express, { Request, Response } from "express";
import { createACause } from "../controllers/create-a-cause";

const router = express.Router();

router.post("/causes", createACause);

export { router as createACauseRouter };
