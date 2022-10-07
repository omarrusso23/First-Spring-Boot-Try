import "./login.css";
import React, { useEffect, useState } from "react";

import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleClick2 = () => {
    fetch("http://localhost:8080/passenger/getAll")
      .then((response) => response.json())
      .then((data) => {
        const userName = document.getElementById("usr").value;
        return data.filter((dbUser) => dbUser.Title === userName).length > 0;
      })
      .then((userExists) => {
        if (userExists) {
          navigate("/Home");
        } else {
          navigate("/");
        }
      });
  };

  const handleClick = () => {
    navigate("/Register");
  };

  return (
    <div className="mainLogin">
      <div className="rightLogin">
        <div class="area">
          <ul class="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      <div className="leftLogin">
        <h1 className="loginH1">Sign In</h1>
        <div className="loginForm">
          <form
            action="action_page.php"
            method="post"
            className="loginForm"
            noValidate
            autoComplete="off"
          >
            <label for="uname" className="labelUsr">
              <b>Username</b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="uname"
              required
              className="usr"
              id="usr"
            ></input>

            <label for="psw" className="labelPsw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
              className="psw"
            ></input>

            <button type="button" className="loginBtn" onClick={handleClick2}>
              Login
            </button>
          </form>
        </div>
        <button className="loginBtn2" onClick={handleClick}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Login;
