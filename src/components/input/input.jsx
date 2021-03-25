import React from "react";
import "./input.css";

export const Input = (props) => {
  return (
    <input
      value={props.value}
      id={props.id}
      className="input"
      name={props.name}
      type={props.type}
      size="28"
    />
  );
};
