import { Query } from ".";
import * as Types from "../../types";

const getSingleBook = () => Query<Types.Book[]>(`SELECT * FROM Books`);
const getAllBooks = (id: number) => Query<Types.Book[]>(`SELECT * FROM Books WHERE id = ?`, [id]);
const createBook = (newBookInfo: Types.NewBookInfo) => Query(`INSERT INTO Books SET ?`, [newBookInfo]);
const updateBook = (id: number, newBookInfo: Types.NewBookInfo) => Query(`UPDATE Books SET ? WHERE id = ?`, [newBookInfo, id]);
const deleteBook = (id: number) => Query(`DELETE FROM Books WHERE id = ?`, [id]);

export default {
  getSingleBook,
  getAllBooks,
  createBook,
  updateBook,
  deleteBook,
};

//! does delete book depend on the author?
