import React from "react";
import "./login.css";
import { Label } from "../../components/label/label";
import { Input } from "../../components/input/input";
import { Button } from "../../components/button/button";

export const Login = (props) => {
  return (
    <div className="login">
      <h2 className="title">Войти</h2>
      <form
        className="form"
        onSubmit={(evt) => {
          evt.preventDefault();
          props.navigate("map");
        }}
      >
        <Label htmlFor="email" value="Email:" />
        <Input id="email" name="email" type="email" />
        <Label htmlFor="password" value="Пароль:" />
        <Input id="password" name="password" type="password" />
        <Button value="Войти" type="submit" />
      </form>
      <div>
        Новый пользователь?{" "}
        <a
          href=" "
          onClick={(evt) => {
            evt.preventDefault();
            props.navigate("registration");
          }}
        >
          Регистрация
        </a>
      </div>
    </div>
  );
};
