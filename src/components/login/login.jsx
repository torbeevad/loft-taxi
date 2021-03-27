import React from "react";
import "./login.css";
import { Label } from "../label/label";
import { Input } from "../input/input";
import { Button } from "../button/button";

export const Login = (...props) => {
  return (
    <div className="login">
      <h2 className="title">Войти</h2>
      <form className="form">
        <Label htmlFor="email" value="Email:" />
        <Input id="email" name="email" type="email" />
        <Label htmlFor="password" value="Пароль:" />
        <Input id="password" name="password" type="password" />
        <Button
          value="Войти"
          type="submit"
          onClick={(e) => {
            e.preventDefault();

            props.navigate("map");
          }}
        />
      </form>
      <div>
        Новый пользователь?{" "}
        {/* <a
            onClick={() => {
              navigate("registration");
            }}
          >
            Регистрация
          </a> */}
      </div>
    </div>
  );
};
