// collect all routes here

import * as express from "express";
import authRouter from "./AUTH Routes";
import apiRouter from "./API Routes";

const baseRouter = express.Router();

baseRouter.use("/api", apiRouter);
baseRouter.use("/auth", authRouter);

export default baseRouter;
