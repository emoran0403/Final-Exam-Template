import * as React from "react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as Types from "../../types";

const SingleCategory = (props: Types.SingleCategoryProps) => {
  const nav = useNavigate();
  const loc = useLocation();

  const CATEGORY = loc.state as Types.Category;

  useEffect(() => {}, []);

  return (
    <div>
      <div>
        You are viewing the {CATEGORY.name} genre, whose id is: {CATEGORY.id}
      </div>
      <button
        onClick={() => {
          nav("/categories");
        }}
      >
        Back to all categories
      </button>
    </div>
  );
};

export default SingleCategory;
