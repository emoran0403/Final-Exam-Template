import { Query } from ".";
import * as Types from "../../types";

const getAllUsers = () => Query<Types.SPUser>(`CALL getAllUSers();`);
const getSingleUser = (id: number) => Query<Types.SPUser>(` CALL getSingleUser(?);`, [id]);
const getSingleUserAUTH = (email: string) => Query<Types.SPUser>(`CALL getSingleUserAUTH(?);`, [email]);
const insertNewUser = (newUserInfo: Types.NewUserInfo) => Query("INSERT INTO Users SET ?", [newUserInfo]);

export default {
  getAllUsers,
  getSingleUser,
  getSingleUserAUTH,
  insertNewUser,
};
