import { Query } from ".";
import * as Types from "../../types";

const getAllUsers = () => Query<Types.User[]>(`CALL getAllUSers();`);
const getSingleUser = (id: number) => Query<Types.User[]>(` CALL getSingleUser(?);`, [id]);
const getSingleUserAUTH = (id: number) => Query<Types.User[]>(`CALL getSingleUserAUTH(?);`, [id]);

export default {
  getAllUsers,
  getSingleUser,
  getSingleUserAUTH,
};
