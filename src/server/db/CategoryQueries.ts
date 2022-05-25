import { Query } from ".";
import * as Types from "../../types";

const getAllCategories = () => Query<Types.SPCategory>(`CALL getAllCategories();`);
const getSingleCategory = (id: number) => Query<Types.SPCategory>(`CALL getSingleCategory(?);`, [id]);

export default {
  getAllCategories,
  getSingleCategory,
};
