import React from "react";
import { Login } from "../login/login";
import { Registration } from "../registration/registration";
import logo from "../../img/Loft-taxi.svg";
import "./main.css";

export const Main = (...props) => {
  return (
    <div className="section">
      <div className="left-side">
        <img className="svg-logo" src={logo} alt={"logo"} />
      </div>
      <div className="right-side">
        <Login props={props} />
        <Registration props={props} />
      </div>
    </div>
  );
};
