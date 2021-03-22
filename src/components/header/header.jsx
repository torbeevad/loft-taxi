import React from "react";
import "./header.css";
import logo from "../../img/Header-logo.svg";

export const Header = ({ navigate }) => {
  return (
    <>
      <header className="header">
        <img className="header-logo" src={logo} alt={"logo"} />
        <nav className="header-nav">
          <ul className="header-list">
            <li className="header-item">
              <button
                className="header-button"
                onClick={() => {
                  navigate("map");
                }}
              >
                Карта
              </button>
            </li>
            <li className="header-item">
              <button
                className="header-button"
                onClick={() => {
                  navigate("profile");
                }}
              >
                Профиль
              </button>
            </li>
            <li className="header-item">
              <button
                className="header-button"
                onClick={() => {
                  navigate("main");
                }}
              >
                Выйти
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
