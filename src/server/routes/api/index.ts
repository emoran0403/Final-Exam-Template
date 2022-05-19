import * as express from "express";
import bookRouter from "./BookRoutes";
import categoryRouter from "./CategoryRoutes";

const apiRouter = express.Router();

// current route is "/api"

apiRouter.use("/books", bookRouter);
apiRouter.use("/categories", categoryRouter);

export default apiRouter;

//! this collects books and category routes into apiRouter
