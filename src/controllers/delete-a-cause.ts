import express, { Request, Response } from "express";
import prisma from "../services/prisma-client";

export const deleteACause = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const existingCause = await prisma.cause.findUnique({
      where: { id },
    });
    if (!existingCause) {
      return res.status(404).json({ error: "Cause not found" });
    }
    await prisma.cause.delete({
      where: { id },
    });
    res.status(200).json({ message: "Cause deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete cause" });
  }
};
