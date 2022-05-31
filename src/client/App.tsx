import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Allbooks from "./Book Views/Allbooks";
import SingleBook from "./Book Views/Singlebook";
import Allcategories from "./Category Views/Allcategories";
import Singlecategory from "./Category Views/Singlecategory";
import LoginPage from "./Login";
import Navbar from "./Navbar";

const App = (props: AppProps) => {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/books" element={<Allbooks />} />
        <Route path="/books/:id" element={<SingleBook />} />
        <Route path="/categories" element={<Allcategories />} />
        <Route path="/categories/:id" element={<Singlecategory />} />
      </Routes>
    </div>
  );
};

interface AppProps {}

export default App;
