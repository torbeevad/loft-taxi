import React from "react";
import "./button.css";

export const Button = (props) => {
  return <button className="button">{props.value}</button>;
};

// export const Button = ({ type, value, onClick }) => {
//   return (
//     <button className="button" type={type} onClick={onClick}>
//       {value}
//     </button>
//   );
// };
