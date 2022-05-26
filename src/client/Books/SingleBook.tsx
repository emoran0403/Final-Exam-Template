import * as React from "react";
import { useState, useEffect } from "react";
import * as Types from "../../types";
import { useLocation, useNavigate } from "react-router-dom";
import * as Fetcher from "../Client_Utils/Fetcher";

const SingleBook = (props: Types.SingleBookProps) => {
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [isEditing, setisEditing] = useState<boolean>(false);

  const nav = useNavigate();
  const loc = useLocation();

  const BOOK = loc.state as Types.Book;

  const updateBook = () => {
    Fetcher.PUT(`/api/books/${BOOK.id}`, { title, author })
      .then(() => {
        nav("/books");
      })
      .catch((error) => {
        console.log(`Update Book Error...\n`);
        console.error(error);
      });
  };

  const deleteBook = () => {
    Fetcher.DELETE(`/api/books/${BOOK.id}`)
      .then(() => {
        nav("/books");
      })
      .catch((error) => {
        console.log(`Delete Book Error...\n`);
        console.error(error);
      });
  };

  const isEditingBook = () => {
    return (
      <div>
        <input value={title} onChange={(e) => setTitle(e.target.value)}></input>
        <input value={author} onChange={(e) => setAuthor(e.target.value)}></input>
        <div>Genre: {BOOK.name}</div>
        <div>Sells for: {BOOK.price}</div>
        <button
          onClick={() => {
            updateBook();
          }}
        >
          Submit
        </button>
        <button
          onClick={() => {
            setisEditing(false);
            setTitle("");
            setAuthor("");
          }}
        >
          Cancel
        </button>
      </div>
    );
  };
  const isNOTEditingBook = () => {
    return (
      <div>
        <div>Title" {BOOK.title}</div>
        <div>Written by: {BOOK.author}</div>
        <div>Genre: {BOOK.name}</div>
        <div>Sells for: {BOOK.price}</div>
        <button
          onClick={() => {
            setisEditing(true);
            setTitle(BOOK.title);
            setAuthor(BOOK.author);
          }}
        >
          Edit
        </button>
        <button
          onClick={() => {
            deleteBook();
          }}
        >
          Delete
        </button>
      </div>
    );
  };

  return (
    <div>
      {isEditing && isEditingBook()}
      {!isEditing && isNOTEditingBook()}
    </div>
  );
};

export default SingleBook;
