import * as React from "react";
import * as Types from "../../types";
import * as Fetcher from "../Client Utils/Fetcher";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Allcategories = (props: Types.CategoriesProps) => {
  const [categoriesArray, setCategoriesArray] = useState<Types.Category[]>([]);

  const nav = useNavigate();

  useEffect(() => {
    Fetcher.GET(`/api/categories/`)
      .then((category) => {
        console.log(category);
        setCategoriesArray(category);
      })
      .catch((err) => {
        console.log(`get all categories error...\n`);
        console.error(err);
      });
  }, []);

  return (
    <div>
      {categoriesArray.map((category) => {
        <div key={category.id}>
          <div>Title: {category.name}</div>
          <button
            onClick={() => {
              nav(`/categories/${category.id}`, { state: { ...category } });
            }}
          >
            Details
          </button>
        </div>;
      })}
    </div>
  );
};

export default Allcategories;
