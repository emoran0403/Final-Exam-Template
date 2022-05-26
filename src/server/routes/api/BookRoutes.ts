import * as express from "express";
import * as DB from "../../db";

const bookRouter = express.Router();

// current route is "/api/books"

// get all books
bookRouter.get("/", async (req, res, next) => {
  try {
    const [data, metaData] = await DB.Books.getAllBooks();
    res.status(200).json(data);
  } catch (error) {
    console.log(`get all books error...\m`);
    console.error(error);
    res.status(404).json({ message: `Could not get all books` });
  }
});

// get single book
bookRouter.get("/:id", async (req, res, next) => {
  const id = Number(req.params.id);
  try {
    const [data, metaData] = await DB.Books.getSingleBook(id);
    if (data.length) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: `the book with id: ${id} does not exist` });
    }
  } catch (error) {
    console.log(`get all books error...\m`);
    console.error(error);
    res.status(404).json({ message: `couldnot look up the book with id: ${id}` });
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
    let { title, author } = req.body; // destructure
    const updateBookInfo = { title, author }; // repackage
    const results = await DB.Books.updateBook(Number(id), updateBookInfo); // query
    if (results.changedRows) {
      res.status(200).json({ message: `Book Updated!` }); // on success
    } else {
      res.status(400).json({ message: `the book with id ${id} was not updated` }); // on failure
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
    await DB.Books.deleteBook(id);
    // neither data, nor metaData come back as defined

    res.status(200).json({ message: `Book Deleted!` }); // on success
  } catch (error) {
    console.log(`Error incoming...\n`);
    console.log(error);
    res.status(500).json({ message: `Delete Book Error` });
  }
});

export default bookRouter;

//! All book routes can go here
