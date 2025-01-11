import express, { Request, Response } from "express";
import prisma from "../services/prisma-client";

export const updateACause = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, category, description } = req.body;
    const existingCause = await prisma.cause.findUnique({
      where: { id },
    });
    if (!existingCause) {
      return res.status(404).json({ error: "Cause not found" });
    }
    const updatedCause = await prisma.cause.update({
      where: { id },
      data: {
        name,
        category,
        description,
      },
    });
    res.status(200).json(updatedCause);
  } catch (error) {
    res.status(500).json({ error: "Failed to update cause" });
  }
};
