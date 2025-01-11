import express, { Request, Response } from "express";
import { getAllCauses } from "../controllers/get-all-causes";

const router = express.Router();

router.get("/causes", getAllCauses);

export { router as getAllCausesRouter };
