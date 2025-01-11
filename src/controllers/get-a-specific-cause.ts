import express, { Request, Response } from "express";
import prisma from "../services/prisma-client";

export const getACause = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const cause = await prisma.cause.findUnique({
      where: { id },
    });
    if (!cause) {
      res.status(404).json({ error: `No cause with that id ${id} found` });
    }
    res.json(cause);
  } catch (error) {
    res.status(500).json({ error: "Failed to receive cause" });
  }
};
