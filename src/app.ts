import express, { json } from "express";
import { createACauseRouter } from "./routes/create-a-cause";
import { getAllCausesRouter } from "./routes/get-all-causes";
import { getACauseRouter } from "./routes/get-a-cause";
import { updateACauseRouter } from "./routes/update-a-cause";
import { deleteACauseRouter } from "./routes/delete-a-cause";
import { contributeToACauseRouter } from "./routes/contribute-to-a-cause";
const app = express();

app.use(json());

app.use(createACauseRouter);
app.use(getAllCausesRouter);
app.use(getACauseRouter);
app.use(updateACauseRouter);
app.use(deleteACauseRouter);
app.use(contributeToACauseRouter);

export { app };
