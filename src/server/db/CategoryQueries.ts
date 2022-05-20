import { Query } from ".";
import * as Types from "../../types";

const getAllCategories = () => Query<Types.Category[]>(`CALL getAllCategories();`);
const getSingleCategory = (id: number) => Query<Types.Category[]>(`CALL getSingleCategory(?);`, [id]);

export default {
  getAllCategories,
  getSingleCategory,
};
