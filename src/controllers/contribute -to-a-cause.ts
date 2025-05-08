import express, { Request, Response } from "express";
import prisma from "../services/prisma-client";

export const contributeToACause = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { userId, type, amount, description, name, email } = req.body;
    const existingCause = await prisma.cause.findUnique({
      where: { id },
    });
    if (!existingCause) {
      return res.status(404).json({ error: "Cause not found" });
    }

    const contribution = await prisma.contribution.create({
      data: {
        userId,
        type,
        amount,
        description,
        name,
        email,
        causeId: id,
      },
    });
    res.status(201).json(contribution);
  } catch (error) {
    res.status(500).json({ error: "Failed to contribute" });
  }
};
