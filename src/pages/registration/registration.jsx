import React from "react";
import "./registration.css";
import { Label } from "../../components/label/label";
import { Input } from "../../components/input/input";
import { Button } from "../../components/button/button";

export const Registration = (props) => {
  return (
    <div className="registration">
      <h2 className="title">Регистрация</h2>
      <form
        className="form"
        onSubmit={(evt) => {
          evt.preventDefault();
          props.navigate("profile");
        }}
      >
        <Label htmlFor="email" value="Email:" />
        <Input id="email" name="email" type="email" />
        <Label htmlFor="name" value="Имя пользователя:" />
        <Input id="name" name="name" type="text" />
        <Label htmlFor="password" value="Пароль:" />
        <Input id="password" name="password" type="password" />
        <Button value="Зарегестрироваться" />
      </form>

      <div>
        Уже зарегестрированы?
        <a
          href=" "
          onClick={(evt) => {
            evt.preventDefault();
            props.navigate("login");
          }}
        >
          Войти
        </a>
      </div>
    </div>
  );
};
