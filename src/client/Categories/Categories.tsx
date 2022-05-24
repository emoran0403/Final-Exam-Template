import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as Types from "../../types";
import * as Fetcher from "../Client_Utils/Fetcher";

const Categories = (props: Types.CategoriesProps) => {
  const [categoriesArray, setCategoriesArray] = useState<Types.Category[]>([]);

  const nav = useNavigate();

  useEffect(() => {
    Fetcher.GET("/api/categories")
      .then((categories) => setCategoriesArray(categories))
      .catch((err) => {
        console.log("Get All Categories Fetcher Error...\n");
        console.error(err);
      });
  }, []);

  return (
    <>
      {categoriesArray.map((category) => (
        <>
          <div key={category.id}>Title" {category.name}</div>

          <button onClick={() => nav(`/api/categories${category.id}`, { state: { ...category } })}>See Details</button>
        </>
      ))}
    </>
  );
};

export default Categories;
