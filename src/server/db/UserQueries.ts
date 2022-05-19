import { Query } from ".";
import * as Types from "../../types";

const getAllUsers = () => Query<Types.User[]>(`SELECT * FROM Users`);
const getSingleUser = (id: number) => Query<Types.User[]>(`SELECT * FROM Users WHERE id = ?`, [id]);

export default {
  getAllUsers,
  getSingleUser,
};
