//this is where I make the DB connection

import * as mysql from "mysql";
import * as dotenv from "dotenv";
import { DB_CONFIG } from "../config";

dotenv.config();

export const Connection = mysql.createPool(DB_CONFIG);

export const Query = <T = mysql.OkPacket>(query: string, values?: unknown[]) => {
  return new Promise<T>((resolve, reject) => {
    Connection.query(query, values, (err, result) => {
      if (err) {
        return reject(err);
      }
      return resolve(result);
    });
  });
};
