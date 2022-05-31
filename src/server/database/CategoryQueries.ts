//category queries go here

import { Query } from ".";
import * as Types from "../../types";

const getAllCategories = async () => await Query<Types.SPCategory>(`CALL getAllCategories();`);
const getSingleCategory = async (id: number) => await Query<Types.SPCategory>(`CALL getSingleCategory(?);`, [id]);

export default {
  getAllCategories,
  getSingleCategory,
};
