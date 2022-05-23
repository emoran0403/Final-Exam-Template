import { Query } from ".";
import * as Types from "../../types";

const getAllUsers = () => Query<Types.User[]>(`CALL getAllUSers();`);
const getSingleUser = (id: number) => Query<Types.User[]>(` CALL getSingleUser(?);`, [id]);
const getSingleUserAUTH = (email: string) => Query<Types.User[]>(`CALL getSingleUserAUTH(?);`, [email]);
const insertNewUser = (newUserInfo: Types.NewUserInfo) => Query<Types.SP_Return>("INSERT INTO users SET ?", [newUserInfo]);

export default {
  getAllUsers,
  getSingleUser,
  getSingleUserAUTH,
  insertNewUser,
};
