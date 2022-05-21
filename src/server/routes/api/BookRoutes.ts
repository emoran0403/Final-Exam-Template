import * as express from "express";
import * as DB from "../../db";

const bookRouter = express.Router();

// current route is "/api/books"

// get all books
bookRouter.get("/", async (req, res, next) => {
  try {
    const data = await DB.Books.getAllBooks;
    res.status(200).json(data);
  } catch (error) {
    console.log(`get all books error...\m`);
    console.error(error);
    res.status(404).json({ message: `my message here` });
  }
});

// get single book
bookRouter.get("/:id", async (req, res, next) => {
  const id = Number(req.params.id);
  try {
    const data = await DB.Books.getSingleBook(id);
    res.status(200).json(data);
  } catch (error) {
    console.log(`get all books error...\m`);
    console.error(error);
    res.status(404).json({ message: `my message here` });
  }
});

//! not recognizing my validation node module
//new book
bookRouter.post("/", async (req, res, next) => {
  try {
    let { title, author, price, categoryid } = req.body; // destructure
    const newBookInfo = { title, author, price, categoryid }; // repackage
    const results = await DB.Books.createBook(newBookInfo); // query
    if (results.affectedRows) {
      res.status(200).json({ message: `New Book Added!` }); // on success
    } else {
      res.status(400).json({ message: `New Book Not Added!` }); // on failure
    }
  } catch (error) {
    console.log(`New Book Error incoming...\n`);
    console.log(error);
    res.status(500).json({ message: `New Book Error` });
  }
});

// update book
bookRouter.put("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    let { title, author, price, categoryid } = req.body; // destructure
    const newBookInfo = { title, author, price, categoryid }; // repackage
    const results = await DB.Books.updateBook(Number(id), newBookInfo); // query
    if (results.affectedRows) {
      res.status(200).json({ message: `Book Updated!` }); // on success
    } else {
      res.status(400).json({ message: `Book Not Updated!` }); // on failure
    }
  } catch (error) {
    console.log(`Update Book Error incoming...\n`);
    console.log(error);
    res.status(500).json({ message: `Update Book Error` });
  }
});

// delete book
bookRouter.delete("/:id", async (req, res, next) => {
  const id = Number(req.params.id);
  try {
    const results = await DB.Books.deleteBook(id);
    if (results.affectedRows) {
      res.status(200).json({ message: `Book Deleted!` }); // on success
    } else {
      res.status(400).json({ message: `Book Not Deleted!` }); // on failure
    }
  } catch (error) {
    console.log(`Error incoming...\n`);
    console.log(error);
    res.status(500).json({ message: `Delete Book Error` });
  }
});

export default bookRouter;

//! All book routes can go here
