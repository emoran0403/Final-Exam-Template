//collect all category routes here
//starting category routes

import * as express from "express";
import * as DB from "../../database";

const categoryRouter = express.Router();

//get all categories
categoryRouter.get("/", async (req, res) => {
  try {
    const [data, metaData] = await DB.Categories.getAllCategories();
    res.status(200).json(data);
  } catch (error) {
    console.log(`get all error incoming...\n`);
    console.error(error);
    res.status(404).json({ message: "could not get all categories" });
  }
});

// get single category
categoryRouter.get("/:id", async (req, res) => {
  const id = Number(req.params.id);
  try {
    const [data, metaData] = await DB.Categories.getSingleCategory(id);
    if (data.length > 0) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: "that category was not found" });
    }
  } catch (error) {
    console.log(`get single error incoming...\n`);
    console.error(error);
    res.status(404).json({ message: "could not get single category" });
  }
});

export default categoryRouter;
