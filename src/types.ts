// This is where I define the Types used in the project
// I can fill these in before the exam

export interface Category {
  id: number;
  name: string;
}

export interface Book {
  id: number;
  categoryid: number;
  categoryname: string;
  title: string;
  author: string;
  price: number;
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
