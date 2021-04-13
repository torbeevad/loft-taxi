import React from "react";
import "./registration.css";
import {Label} from "../../components/label/label";
import {Input} from "../../components/input/input";
import {Button} from "../../components/button/button";
import {Link} from "react-router-dom";
import {registration} from "../../actions";

export class Registration extends React.Component {

    registration = (event) => {
        event.preventDefault();
        const {email, password, name} = event.target;
        this.props.registration(email.value, password.value, name.value)
        }

    render() {
        return (
            <div className="registration">
                <h2 className="title">Регистрация</h2>
                <form
                    className="form"
                    onSubmit={registration}
                >
                    <Label htmlFor="email" value="Email:"/>
                    <Input className="form-input" id="email" name="email" type="email"/>
                    <Label htmlFor="name" value="Имя пользователя:"/>
                    <Input className="form-input" id="name" name="name" type="text"/>
                    <Label htmlFor="password" value="Пароль:"/>
                    <Input className="form-input" id="password" name="password" type="password"/>
                    <Button value="Зарегестрироваться"/>
                </form>

                <div>
                    Уже зарегестрированы?
                    <Link to="/">Войти</Link>
                </div>
            </div>
        );
    };
}