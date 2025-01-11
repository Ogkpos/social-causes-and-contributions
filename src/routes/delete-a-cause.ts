import express, { Request, Response } from "express";
import { deleteACause } from "../controllers/delete-a-cause";

const router = express.Router();

//@ts-ignore
router.delete("/causes/:id", deleteACause);

export { router as deleteACauseRouter };
