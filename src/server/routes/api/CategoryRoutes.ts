import * as express from "express";
import * as DB from "../../db";

const categoryRouter = express.Router();

// current route is "/api/categories"

// get all categories
categoryRouter.get("/", async (req, res, next) => {
  try {
    const data = await DB.Categories.getAllCategories;
    res.status(200).json(data);
  } catch (error) {
    console.log(`Error...\n`);
    console.error(error);
    res.status(500).json({ message: `Error` });
  }
});

//get single category
categoryRouter.get("/:id", async (req, res, next) => {
  const id = Number(req.params.id);
  try {
    const data = await DB.Categories.getSingleCategory(id);
    res.status(200).json(data);
  } catch (error) {
    console.log(`Error...\n`);
    console.error(error);
    res.status(500).json({ message: `Error` });
  }
});
export default categoryRouter;

//! All category routes can go here
