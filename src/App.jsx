import React from "react";
import {Map} from "./pages/map/map";
import {ProfileWithConnect} from "./pages/profile/profile";
import {Main} from "./pages/main/main";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {Switch, Route} from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import "./App.css";

class App extends React.Component {

    render() {
        return (
            <main>
                <section>
                    <Switch>
                        <Route exact path="/" component={Main}/>
                        <Route exact path="/registration" component={Main}/>
                        <PrivateRoute exact path="/map" component={Map}/>
                        <PrivateRoute exact path="/profile" component={ProfileWithConnect}/>
                    </Switch>
                </section>
            </main>
        );
    }
}

App.propTypes = {
    isLoggedIn: PropTypes.bool,
};

export default connect((state) => ({isLoggedIn: state.auth.isLoggedIn}))(App);
