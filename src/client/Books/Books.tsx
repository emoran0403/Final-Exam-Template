import * as React from "react";
import { useState, useEffect } from "react";
import * as Types from "../../types";
import * as Fetcher from "../Client_Utils/Fetcher";
import { useNavigate } from "react-router-dom";

const Books = (props: Types.BooksProps) => {
  const [booksArray, setBooksArray] = useState<Types.Book[]>([]);

  const nav = useNavigate();

  useEffect(() => {
    Fetcher.GET("/api/books")
      .then((books) => {
        setBooksArray(books);
        // console.log(books);
      })
      .catch((err) => {
        console.log("Get All Books Fetcher Error...\n");
        console.error(err);
      });
  }, []);

  return (
    <div>
      {booksArray.map((book) => (
        <div key={book.id}>
          <div>Title" {book.title}</div>
          <div>Written by: {book.author}</div>
          <div>Genre: {book.name}</div>
          <div>Sells for: {book.price}</div>
          <button onClick={() => nav(`/books/${book.id}`, { state: { ...book } })}>See Details</button>
        </div>
      ))}
    </div>
  );
};

export default Books;
