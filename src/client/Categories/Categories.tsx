import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as Types from "../../types";
import * as Fetcher from "../Client_Utils/Fetcher";

const Categories = (props: Types.CategoriesProps) => {
  const [categoriesArray, setCategoriesArray] = useState<Types.Category[]>([]);

  const nav = useNavigate();
  console.log(`we are on categories`);
  useEffect(() => {
    Fetcher.GET("/api/categories")
      .then((categories) => setCategoriesArray(categories))
      .catch((err) => {
        console.log("Get All Categories Fetcher Error...\n");
        console.error(err);
      });
  }, []);

  return (
    <div>
      {categoriesArray.map((category) => (
        <div key={category.id}>
          <div>Title" {category.name}</div>

          <button onClick={() => nav(`/categories/${category.id}`, { state: { ...category } })}>See Details</button>
        </div>
      ))}
    </div>
  );
};

export default Categories;
