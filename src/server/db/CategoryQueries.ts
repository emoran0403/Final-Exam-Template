import { Query } from ".";
import * as Types from "../../types";

const getAllCategories = () => Query<Types.Category[]>(`SELECT * FROM Categories`);
const getSingleCategory = (id: number) => Query<Types.Category[]>(`SELECT * FROM Categories WHERE id = ?`, [id]);

export default {
  getAllCategories,
  getSingleCategory,
};
