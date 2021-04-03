import React from "react";
import "./input.css";

export const Input = (props) => {
  return (
    <input
      value={props.value}
      id={props.id}
      className={props.className}
      name={props.name}
      type={props.type}
      size="28"
    />
  );
};
