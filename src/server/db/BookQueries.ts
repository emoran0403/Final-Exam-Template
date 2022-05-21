import { Query } from ".";
import * as Types from "../../types";

const getAllBooks = async () => (await Query<Types.SP_Return>(`CALL getAllBooks();`))[0];

const getSingleBook = async (id: number) => (await Query<Types.SP_Return>(`CALL getSingleBook(?);`, [id]))[0];

const createBook = async (newBookInfo: Types.NewBookInfo) => (await Query(`INSERT INTO Books SET ?`, [newBookInfo]))[0];

const updateBook = async (id: number, newBookInfo: Types.NewBookInfo) =>
  (await Query(`UPDATE Books SET ? WHERE id = ?`, [newBookInfo, id]))[0];

const deleteBook = async (id: number) => (await Query(`CALL deleteBook(?);`, [id]))[0];

export default {
  getSingleBook,
  getAllBooks,
  createBook,
  updateBook,
  deleteBook,
};
