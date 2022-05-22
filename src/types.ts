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
  categoryname: string; // varchar(50)
}

// All optional so that I use this to extend Request to make ReqUser
export interface User {
  id?: number; // AUTO_INCREMENT
  email?: string; // varchar(60)
  password?: string; // varchar(60)
  role?: string; // varchar(25)
  name?: string; // varchar(60)
}

export interface ReqUser extends Request {
  user?: User;
}

export interface NewBookInfo {
  id?: number; // int(11)
  title: string; // varchar(100)
  author: string; // varchar(100)
  price: number; // decimal(5,2)
  categoryid: number; // int(11)
}

//! not quite sure on this guy
export interface SP_Return {
  data: Category[] | Book[] | User[];
  OkPacket: OkPacket;
}
