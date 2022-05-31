import * as dotenv from "dotenv";
dotenv.config();

export const DB_CONFIG = {
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};

export const JWT_CONFIG = { jwtSecretKey: process.env.JWT_SECRET_KEY, jwtExpireTime: process.env.JWT_EXPIRE_TIME };
