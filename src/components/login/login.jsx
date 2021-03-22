import React from "react";
import "./login.css";

export const Login = ({ navigate }) => {
  return (
    <>
      <div className="login">
        <h2 className="title">Войти</h2>
        <form className="form">
          <label htmlFor="email">Имя пользователя *</label>
          <input
            className="input"
            id="email"
            type="email"
            name="email"
            size="28"
          />
          <label htmlFor="password">Пароль *</label>
          <input
            className="input"
            id="password"
            type="password"
            name="password"
            size="28"
          />
        </form>
        <button
          className="button"
          onClick={() => {
            navigate("map");
          }}
        >
          Войти
        </button>
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
    </>
  );
};
