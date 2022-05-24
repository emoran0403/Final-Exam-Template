import { Query } from ".";
import * as Types from "../../types";

const getAllBooks = async () => await Query<Types.SP_Return>(`CALL getAllBooks();`);

const getSingleBook = async (id: number) => await Query<Types.SP_Return>(`CALL getSingleBook(?);`, [id]);

const createBook = async (newBookInfo: Types.NewBookInfo) => await Query(`INSERT INTO Books SET ?`, [newBookInfo]);

const updateBook = async (id: number, newBookInfo: Types.NewBookInfo) => await Query(`UPDATE Books SET ? WHERE id = ?`, [newBookInfo, id]);

const deleteBook = async (id: number) => await Query(`CALL deleteBook(?);`, [id]);

export default {
  getSingleBook,
  getAllBooks,
  createBook,
  updateBook,
  deleteBook,
};
