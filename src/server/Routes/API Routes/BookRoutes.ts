//collect all book routes here

import * as express from "express";
import * as DB from "../../database";

const bookRouter = express.Router();
// current routes is /api/books

// get all books
bookRouter.get("/", async (req, res) => {
  try {
    const [data, metaData] = await DB.Books.getAllBooks();
    res.status(200).json(data);
  } catch (error) {
    console.log(`get all books error incoming...\n`);
    console.error(error);
    res.status(404).json({ message: `could not get all books` });
  }
});

// create new books
bookRouter.post("/", async (req, res) => {
  try {
    let { title, author, price, categoryid } = req.body;
    const newBookInfo = { title, author, price, categoryid };
    const results = await DB.Books.createBook(newBookInfo);
    if (results.affectedRows) {
      res.status(200).json({ message: `New book added successfully` });
    } else {
      res.status(400).json({ message: `New book NOT added` });
    }
  } catch (error) {
    console.log(`create new books error incoming...\n`);
    console.error(error);
    res.status(404).json({ message: `could not add new book` });
  }
});

// update book
bookRouter.put("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    let { title, author } = req.body;
    const updateBookInfo = { title, author };
    const results = await DB.Books.updateBook(id, updateBookInfo);

    if (results.changedRows) {
      res.status(200).json({ message: `book updated successfully` });
    } else {
      res.status(400).json({ message: `book NOT updated` });
    }
  } catch (error) {
    console.log(`update book error incoming...\n`);
    console.error(error);
    res.status(404).json({ message: `could not do something` });
  }
});

// delete book
bookRouter.delete("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    await DB.Books.deleteBook(id);
    res.status(200).json({ message: `Book deleted successfully` });
  } catch (error) {
    console.log(`delete book error incoming...\n`);
    console.error(error);
    res.status(404).json({ message: `could not do something` });
  }
});

export default bookRouter;
