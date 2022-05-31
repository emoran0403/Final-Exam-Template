//book queries go here

import { Query } from ".";
import * as Types from "../../types";

const getAllBooks = async () => await Query<Types.SPBook>(`CALL getAllBooks();`);

const createBook = async (newBookInfo: Types.NewBookInfo) => await Query(`INSERT INTO Books SET ?`, [newBookInfo]);

const updateBook = async (id: number, updateBookInfo: Types.UpdateBookInfo) =>
  await Query(`UPDATE Books SET ? WHERE id = ?`, [id, updateBookInfo]);

const deleteBook = async (id: number) => await Query<Types.SPBook>(`CALL deleteBook(?);`, [id]);

export default {
  getAllBooks,
  createBook,
  updateBook,
  deleteBook,
};
