// this will collect all api routes

import * as express from "express";
import bookRouter from "./BookRoutes";
import categoryRouter from "./CategoryRoutes";

// current route is /api
const apiRouter = express.Router();

apiRouter.use(`/books`, bookRouter);
apiRouter.use(`/categories`, categoryRouter);

export default apiRouter;
