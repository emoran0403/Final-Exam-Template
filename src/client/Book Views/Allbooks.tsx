import * as React from "react";
import * as Types from "../../types";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Allbooks = (props: Types.BooksProps) => {
  const [state, setState] = useState<string>("");

  const nav = useNavigate();

  useEffect(() => {}, []);
  return <></>;
};

export default Allbooks;
