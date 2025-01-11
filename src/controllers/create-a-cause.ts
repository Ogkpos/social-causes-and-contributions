import express, { Request, Response } from "express";
import prisma from "../services/prisma-client";

export const createACause = async (req: Request, res: Response) => {
  try {
    const { name, description, category } = req.body;
    if (!name || !description || !category) {
      res.status(400).send("field cannot be empty");
    }
    const cause = await prisma.cause.create({
      data: { name, description, category },
    });
    res.status(201).json({ cause });
  } catch (error) {
    res.status(500).json("Failed to create cause");
  }
};
