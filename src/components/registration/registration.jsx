import React from "react";
import "./registration.css";

export const Registration = ({ navigate }) => {
  return (
    <>
      <div className="registration">
        <h2 className="title">Регистрация</h2>
        <form className="form">
          <label htmlFor="email">E-mail *</label>
          <input
            className="input"
            id="email"
            type="email"
            name="email"
            size="28"
          />
          <label htmlFor="name">Имя пользователя *</label>
          <input
            className="input"
            id="name"
            type="text"
            name="name"
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
          Зарегестрироваться
        </button>
        <div>
          Уже зарегестрированы?
          {/* <a
            onClick={() => {
              navigate("login");
            }}
          >
            Войти
          </a> */}
        </div>
      </div>
    </>
  );
};
