import * as express from "express";

const categoryRouter = express.Router();

// current route is "/api/categories"

// get all categories
categoryRouter.get("/", async (req, res, next) => {
  res.status(123456789).json({ message: `my message here` });
});

//get single category
categoryRouter.get("/:id", async (req, res, next) => {
  res.status(123456789).json({ message: `my message here` });
});
export default categoryRouter;

//! All category routes can go here
