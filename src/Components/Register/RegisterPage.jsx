import React, { useEffect, useState } from "react";

import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";

const Register = () => {
  const navigate = useNavigate();

  const handleClick2 = () => {
    navigate("/");
  };

  const AuthContext = createContext();
  const [firstName, setUser] = useState("");
  const [password, setPasword] = useState("");
  const [id, setId] = useState("");
  const [email, setMail] = useState("");
  const image =
    "https://img.freepik.com/vector-premium/perfil-avatar-hombre-icono-redondo_24640-14044.jpg";

  const handleClick3 = (e) => {
    e.preventDefault();
    const passenger = { id, firstName, password, email, image };
    console.log(passenger);
    fetch("http://localhost:8080/passenger/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(passenger),
    }).then(() => {
      navigate("/Home");
    });
  };

  return (
    <div className="RegisterPage">
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
        <h1 className="loginH1">Register</h1>
        <div className="loginForm">
          <form className="loginForm" noValidate autoComplete="off">
            <label for="uname" className="labelUsr" id="user">
              <b>Username</b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="uname"
              required
              className="usr"
              value={firstName}
              onChange={(e) => setUser(e.target.value)}
            ></input>

            <label for="uname" className="labelmail" id="mail">
              <b>Email</b>
            </label>
            <input
              type="email"
              placeholder="Enter email"
              name="email"
              required
              className="mail"
              value={email}
              onChange={(e) => setMail(e.target.value)}
            ></input>

            <label for="psw" className="labelPsw" id="password">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
              className="psw"
              value={password}
              onChange={(e) => setPasword(e.target.value)}
            ></input>

            <button type="button" className="loginBtn" onClick={handleClick3}>
              Register
            </button>
          </form>
        </div>
        <button className="loginBtn2" onClick={handleClick2}>
          Back to login
        </button>
      </div>
    </div>
  );
};

export default Register;
