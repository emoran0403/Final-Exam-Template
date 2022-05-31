import * as React from "react";
import * as Types from "../../types";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Singlecategory = (props: Types.SingleCategoryProps) => {
  const [state, setState] = useState<string>("");

  const nav = useNavigate();

  useEffect(() => {}, []);
  return <></>;
};

export default Singlecategory;
