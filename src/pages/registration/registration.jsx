import React from "react";
import "./registration.css";
import {connect} from 'react-redux';
import {Label} from "../../components/label/label";
import {Input} from "../../components/input/input";
import {Button} from "../../components/button/button";
import {Link} from "react-router-dom";
import {registration} from "../../actions";

class Registration extends React.Component {

    registration = (event) => {
        event.preventDefault();
        const {email, password, name, surname} = event.target;
        this.props.registration(email.value, password.value, name.value, surname.value)
    }

    render() {
        return (
            <div className="registration">
                <h2 className="title">Регистрация</h2>
                {this.props.isLoggedIn ? (
                    <p> You are logged in <Link to="/profile">Go to profile</Link>
                    </p>
                ) : (
                    <>
                        <form className="form" onSubmit={this.registration}>
                            <Label htmlFor="email" value="Email:"/>
                            <Input className="form-input" id="email" name="email" type="email"/>
                            <Label htmlFor="name" value="Имя пользователя:"/>
                            <Input className="form-input" id="name" name="name" type="text"/>
                            <Label htmlFor="surname" value="Фамилия:"/>
                            <Input className="form-input" id="surname" name="surname" type="text"/>
                            <Label htmlFor="password" value="Пароль:"/>
                            <Input className="form-input" id="password" name="password" type="password"/>
                            <Button value="Зарегестрироваться" to="/profile"/>
                        </form>

                        <div>
                            Уже зарегестрированы?
                            <Link to="/">Войти</Link>
                        </div>
                    </>)}
            </div>
        );
    }

    ;
}

export default connect(
    (state) => ({registration: state.registration}), {registration})(Registration);
