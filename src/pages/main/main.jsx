import React from "react";
import logo from "../../img/Loft-taxi.svg";
import "./main.css";
import {LoginWithConnect} from "../login/login";
import {Route, Switch} from "react-router-dom";
import {Registration} from "../registration/registration";

export class Main extends React.Component {

    render() {
        return (
            <div className="main-section">
                <div className="left-side">
                    <img className="svg-logo" src={logo} alt={"logo"}/>
                </div>
                <div className="right-side">
                    <Switch>
                        <Route exact path="/" component={LoginWithConnect}/>
                        <Route path="/registration" component={Registration}/>
                    </Switch>
                </div>
            </div>
        );
    }
}
