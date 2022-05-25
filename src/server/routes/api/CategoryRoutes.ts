import * as express from "express";
import * as DB from "../../db";
import * as Types from "../../../types";

const categoryRouter = express.Router();

// current route is "/api/categories"

// get all categories
categoryRouter.get("/", async (req, res, next) => {
  try {
    const [data, metaData] = await DB.Categories.getAllCategories();
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
    const [data, metaData] = await DB.Categories.getSingleCategory(id);
    if (data.length) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: `that category was not found` });
    }
  } catch (error) {
    console.log(`Error...\n`);
    console.error(error);
    res.status(500).json({ message: `Error` });
  }
});
export default categoryRouter;

//! All category routes can go here
