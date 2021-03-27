import React from "react";

export const link = (props) => {
  return (
    <a
      href=" "
      className="link"
      onClick={(click) => {
        click.preventDefault();
      }}
    >
      {props.value}
    </a>
  );
};
