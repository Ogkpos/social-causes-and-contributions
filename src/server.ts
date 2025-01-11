import { app } from "./app";
import dotenv from "dotenv";

dotenv.config();

const start = async () => {
  if (!process.env.DATABASE_URL) {
    throw new Error("Please provide a valid Database URL");
  }

  app.listen(3000, () => {
    console.log("Running on port 3000");
  });
};
start();
