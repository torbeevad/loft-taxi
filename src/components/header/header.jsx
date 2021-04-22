import React, {Component} from "react";
import {logIn, logOut} from "../../actions";
import {connect} from 'react-redux'
import "./header.css";
import logo from "../../img/Header-logo.svg";
import {Link} from "react-router-dom";

export class Header extends Component {
    unauthenticated = (event) => {
        event.preventDefault();
        this.props.logOut();
    };

    render() {
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
                            <Link onClick={this.unauthenticated} to="/">Выйти</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    };
};

export const HeaderWithConnect = connect(
    null,
    {logIn, logOut}
)(Header);
