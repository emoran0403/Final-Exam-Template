import * as React from "react";
import * as Types from "../../types";
import * as Fetcher from "../Client Utils/Fetcher";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Allbooks = (props: Types.BooksProps) => {
  const [booksArray, setBooksArray] = useState<Types.Book[]>([]);

  const nav = useNavigate();

  useEffect(() => {
    Fetcher.GET(`/api/books`)
      .then((books) => {
        setBooksArray(books);
      })
      .catch((err) => {
        console.log(`get all books error...\n`);
        console.error(err);
      });
  }, []);
  return (
    <div>
      {booksArray.map((book) => (
        <div key={book.id}>
          <div>Title: {book.title}</div>
          <div>Written by: {book.author}</div>
          <div>Genre: {book.name}</div>
          <div>Value: {book.price}</div>
          <button onClick={() => nav(`/books/${book.id}`, { state: { ...book } })}>Details</button>
        </div>
      ))}
    </div>
  );
};

export default Allbooks;
