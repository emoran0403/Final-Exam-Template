import * as React from "react";
import * as Types from "../../types";
import * as Fetcher from "../Client Utils/Fetcher";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const SingleBook = (props: Types.SingleBookProps) => {
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const nav = useNavigate();
  const loc = useLocation();

  const BOOK = loc.state as Types.Book; // grab the book passed as state, so we can use it here

  const updateBook = () => {
    Fetcher.PUT(`/api/books/${BOOK.id}`, { title, author })
      .then(() => {
        nav(`/books`);
      })
      .catch((error) => {
        console.log(`update book error...\n`);
        console.error(error);
      });
  };

  const deleteBook = () => {
    Fetcher.DELETE(`/api/books/${BOOK.id}`)
      .then(() => {
        nav(`/books`);
      })
      .catch((error) => {
        console.log(`delete book error...\n`);
        console.error(error);
      });
  };

  const isEditingBook = () => {
    return (
      <div>
        <input value={title} onChange={(e) => setTitle(e.target.value)}></input>
        <input value={author} onChange={(e) => setAuthor(e.target.value)}></input>
        <div>Genre: {BOOK.name}</div>
        <div>Value: {BOOK.price}</div>
        <button
          onClick={() => {
            updateBook();
          }}
        >
          Submit
        </button>

        <button
          onClick={() => {
            setIsEditing(false);
            setAuthor("");
            setTitle("");
          }}
        >
          Cancel
        </button>
      </div>
    );
  };

  const isNotEditingBook = () => {
    return (
      <div>
        <div>Title: {BOOK.title}</div>
        <div>Written by: {BOOK.author}</div>
        <div>Genre: {BOOK.name}</div>
        <div>Value: {BOOK.price}</div>
        <button
          onClick={() => {
            setIsEditing(true);
            setAuthor(BOOK.author);
            setTitle(BOOK.title);
          }}
        >
          Edit
        </button>
        <button
          onClick={() => {
            deleteBook;
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
      {!isEditing && isNotEditingBook()}
      <button
        onClick={() => {
          nav(`/books`);
        }}
      >
        Back
      </button>
    </div>
  );
};

export default SingleBook;
