import React from "react";
import "./login.css";
import {authenticate} from "../../actions";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Label} from "../../components/label/label";
import {Input} from "../../components/input/input";
import {Link} from "react-router-dom";
import {Button} from "../../components/button/button";

export class Login extends React.Component {

    authenticate = (event) => {
        event.preventDefault();
        const {email, password} = event.target;
        this.props.authenticate(email.value, password.value);
    };

    render() {
        return (
            <div className="login">
                <h2 className="title">Войти</h2>
                {this.props.isLoggedIn ? (
                    <p> You are logged in <Link to="/profile">Go to profile</Link>
                    </p>
                ) : (
                    <>
                        <form onSubmit={this.authenticate} className="form">
                            <Label htmlFor="email" value="Email:"/>
                            <Input className="form-input" id="email" name="email" type="email"/>
                            <Label htmlFor="password" value="Пароль:"/>
                            <Input className="form-input" id="password" name="password" type="password"/>
                            <Button value="Войти" type="submit"/>
                        </form>
                        <div>
                            Новый пользователь?{" "}
                            <Link to="/registration">Регистрация</Link>
                        </div>
                    </>
                )}
            </div>
        );
    }
}

Login.propTypes = {
    isLoggedIn: PropTypes.bool,
    logIn: PropTypes.func,
};

export const LoginWithConnect = connect(
    (state) => ({isLoggedIn: state.auth.isLoggedIn, logIn: state.logIn}),
    {authenticate}
)(Login);
