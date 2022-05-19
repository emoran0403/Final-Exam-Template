import * as express from "express";
import bookRouter from "./BookRoutes";
import categoryRouter from "./CategoryRoutes";

const apiRouter = express.Router();

apiRouter.use("/books", bookRouter);
apiRouter.use("/category", categoryRouter);

export default apiRouter;

//! this collects books and category routes into apiRouter
