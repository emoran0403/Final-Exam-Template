import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ComponentTemplate = (props: ComponentTemplateProps) => {
  const [state, setState] = useState<string>("");

  const nav = useNavigate();

  useEffect(() => {}, []);
  return <></>;
};

interface ComponentTemplateProps {}

export default ComponentTemplate;
