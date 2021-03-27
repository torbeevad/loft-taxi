import React from "react";
import "./registration.css";
import { Label } from "../label/label";
import { Input } from "../input/input";
import { Button } from "../button/button";

export const Registration = (...props) => {
  return (
    <div className="registration">
      <h2 className="title">Регистрация</h2>
      <form className="form">
        <Label htmlFor="email" value="Email:" />
        <Input id="email" name="email" type="email" />
        <Label htmlFor="name" value="Имя пользователя:" />
        <Input id="name" name="name" type="text" />
        <Label htmlFor="password" value="Пароль:" />
        <Input id="password" name="password" type="password" />
        <Button
          value="Зарегестрироваться"
          onClick={(e) => {
            e.preventDefault();
            props.navigate("map");
          }}
        />
      </form>

      <div>
        Уже зарегестрированы?
        {/* <a
          href=" "
          onClick={(e) => {
            navigate("login");
          }}
        >
          Войти
        </a> */}
      </div>
    </div>
  );
};
