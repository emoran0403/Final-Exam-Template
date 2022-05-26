// This is where I define the Types used in the project
// I can fill these in before the exam

import { OkPacket } from "mysql";
import { Request } from "express";

export interface Category {
  id: number; // AUTO_INCREMENT
  name: string; // varchar(50)
}

export interface Book {
  id: number; // AUTO_INCREMENT
  title: string; // varchar(100)
  author: string; // varchar(100)
  price: number; // decimal(5,2)
  name: string; // varchar(50)
}

export interface UpdateBookInfo {
  title: string; // varchar(100)
  author: string; // varchar(100)
}

export interface NewBookInfo {
  id?: number; // int(11)
  categoryid: number; // int(11)
  title: string; // varchar(100)
  author: string; // varchar(100)
  price: number; // decimal(5,2)
}
// All optional so that I use this to extend Request to make ReqUser
export interface User {
  id?: number; // AUTO_INCREMENT
  email?: string; // varchar(60)
  password?: string; // varchar(60)
  role?: string; // varchar(25)
  name?: string; // varchar(60)
}

export interface NewUserInfo {
  email: string; // varchar(60)
  password: string; // varchar(60)
  name: string; // varchar(60)
  role: string; // varchar(25)
}

export interface Payload {
  id: number;
  email: string;
  role: string;
  name: string;
}

export interface ReqUser extends Request {
  user?: User | Payload;
}

export interface AppProps {}
export interface BooksProps {}
export interface SingleBookProps {}
export interface CategoriesProps {}
export interface SingleCategoryProps {}
export interface LoginPageProps {}

export interface FetchData {
  [key: string]: string | number | boolean;
}

export type SPCategory = [Category[], OkPacket];
export type SPBook = [Book[], OkPacket];
export type SPUser = [User[], OkPacket];
