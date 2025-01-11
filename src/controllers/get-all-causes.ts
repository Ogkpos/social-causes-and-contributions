import express, { Request, Response } from "express";
import prisma from "../services/prisma-client";

export const getAllCauses = async (req: Request, res: Response) => {
  try {
    const causes = await prisma.cause.findMany();
    res.json(causes);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve causes" });
  }
};
