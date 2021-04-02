import React from "react";
import "./header.css";
import logo from "../../img/Header-logo.svg";
import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <header className="header">
            <img className="header-logo" src={logo} alt={"logo"}/>
            <nav className="header-nav">
                <ul className="header-list">
                    <li className="header-item">
                        <Link to="/map">Карта</Link>
                    </li>
                    <li className="header-item">
                        <Link to="/profile">Профиль</Link>
                    </li>
                    <li className="header-item">
                        <Link to="/">Выйти</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};