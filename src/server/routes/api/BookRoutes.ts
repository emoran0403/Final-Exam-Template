import * as express from "express";

const bookRouter = express.Router();

// current route is "/api/books"

// get all books
bookRouter.get("/", async (req, res, next) => {
  try {
    const data = "await db.Books.getallbooks()";
    res.status(200).json(data);
  } catch (error) {
    console.log(`get all books error...\m`);
    console.error(error);
    res.status(404).json({ message: `my message here` });
  }
});

// get single book
bookRouter.get("/:id", async (req, res, next) => {
  res.status(123456789).json({ message: `my message here` });
});

//new book
bookRouter.post("/", async (req, res, next) => {
  res.status(123456789).json({ message: `my message here` });
});

// update book
bookRouter.put("/:id", async (req, res, next) => {
  res.status(123456789).json({ message: `my message here` });
});

// delete book
bookRouter.delete("/:id", async (req, res, next) => {
  res.status(123456789).json({ message: `my message here` });
});

export default bookRouter;

//! All book routes can go here
