//user queries go here

import { Query } from ".";
import * as Types from "../../types";

const getSingleUserAUTH = async (email: string) => await Query<Types.SPUser>(`CALL getSingleUserAUTH(?);`, [email]);

const insertNewUser = async (newUserInfo: Types.NewUserInfo) => await Query(`INSERT INTO Users SET ?`, [newUserInfo]);

export default {
  getSingleUserAUTH,
  insertNewUser,
};
