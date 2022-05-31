//user queries go here

import { Query } from ".";
import * as Types from "../../types";

const getSingleUserAuth = async (email: string) => await Query<Types.SPUser>(`CALL getSingleUserAuth(?);`, [email]);

const insertNewUser = async (newUserInfo: Types.NewUserInfo) => await Query(`INSERT INTO Users SET ?`, [newUserInfo]);

export default {
  getSingleUserAuth,
  insertNewUser,
};
