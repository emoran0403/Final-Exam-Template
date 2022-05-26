import * as React from "react";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import * as Types from "../types";
import Books from "./Books/Books";
import SingleBook from "./Books/SingleBook";
import Categories from "./Categories/Categories";
import SingleCategory from "./Categories/SingleCategory";
import LoginPage from "./Login";
import Navbar from "./Navbar";

const App = (props: Types.AppProps) => {
  useEffect(() => {}, []);

  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<SingleBook />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:id" element={<SingleCategory />} />
      </Routes>
    </div>
  );
};

export default App;
