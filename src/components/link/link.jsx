import React from "react";

export const Button = (props) => {
  return (
    <a
      className="link"
      onClick={(click) => {
        click.preventDefault();
        navigate();
      }}
    >
      {props.value}
    </a>
  );
};
