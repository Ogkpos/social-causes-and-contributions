import express, { Request, Response } from "express";
import { contributeToACause } from "../controllers/contribute -to-a-cause";

const router = express.Router();

//@ts-ignore
router.post("/causes/:id/contribute", contributeToACause);

export { router as contributeToACauseRouter };
