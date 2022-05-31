import * as React from "react";
import * as Types from "../../types";
import { useNavigate, useLocation } from "react-router-dom";

const Singlecategory = (props: Types.SingleCategoryProps) => {
  const loc = useLocation();
  const nav = useNavigate();

  const CATEGORY = loc.state as Types.Category;

  return (
    <div>
      <div>You are viewing the {CATEGORY.name} genre details page</div>
      <div>
        {CATEGORY.name} has an ID of {CATEGORY.id} if you wanted to know that for some reason
      </div>
      <button
        onClick={() => {
          nav(`/categories`);
        }}
      >
        Back to all categories
      </button>
    </div>
  );
};

export default Singlecategory;
