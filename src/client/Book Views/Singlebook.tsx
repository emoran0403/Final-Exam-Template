import * as React from "react";
import * as Types from "../../types";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SingleBook = (props: Types.SingleBookProps) => {
  const [state, setState] = useState<string>("");

  const nav = useNavigate();

  useEffect(() => {}, []);
  return <></>;
};

export default SingleBook;
