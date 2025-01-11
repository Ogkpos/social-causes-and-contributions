import express, { Request, Response } from "express";
import { updateACause } from "../controllers/update-a-cause";

const router = express.Router();

//@ts-ignore
router.put("/causes/:id", updateACause);

export { router as updateACauseRouter };
