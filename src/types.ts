// This is where I define the Types used in the project
// I can fill these in before the exam

import { OkPacket } from "mysql";
export interface Category {
  id: number;
  name: string;
}

export interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  categoryname: string;
}

export interface User {
  id: number;
  email: string;
  role: string;
  name: string;
}

export interface NewBookInfo {
  title: string;
  author: string;
  price: number;
  categoryid: number;
}

export interface SP_Return {
  data: Category[] | Book[] | User[];
  OkPacket: OkPacket;
}
