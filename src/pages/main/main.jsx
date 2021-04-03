import React from "react";
import logo from "../../img/Loft-taxi.svg";
import "./main.css";
import {LoginWithConnect} from "../login/login";
import {Route} from "react-router-dom";
import {Registration} from "../registration/registration";

export class Main extends React.Component {

    render() {
        return (
            <div className="main-section">
                <div className="left-side">
                    <img className="svg-logo" src={logo} alt={"logo"}/>
                </div>
                <div className="right-side">
                        <Route exact path="/" component={LoginWithConnect}/>
                        <Route exact path="/registration" component={Registration}/>
                </div>
            </div>
        );
    }
}
