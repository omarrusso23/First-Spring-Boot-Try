import React from "react";
import "./mainpage.css";

import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Comics");
  };

  const handleClick2 = () => {
    navigate("/Home");
  };

  const handleClick3 = () => {
    navigate("/");
  };

  return (
    <div className="MainPage">
      <div className="acc">
        <div className="profilePic"></div>
        <button className="createBtn" onClick={handleClick2}>
          Main Page
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <button className="createBtn" onClick={handleClick3}>
          Log Out
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className="threads">
        <div className="top">
          <button className="litbtn1" id="series" onClick={handleClick}>
            <h1 className="titulo">Series</h1>
          </button>
          <button className="litbtn2" id="pelis" onClick={handleClick}>
            <h1 className="titulo">Peliculas</h1>
          </button>
          <button className="litbtn3" id="libros" onClick={handleClick}>
            <h1 className="titulo">Libros</h1>
          </button>
        </div>
        <div className="bot">
          <button className="litbtn1" id="comics" onClick={handleClick}>
            <h1 className="titulo">Comics</h1>
          </button>
          <button className="litbtn2" id="pc" onClick={handleClick}>
            <h1 className="titulo">Ordenadores</h1>
          </button>
          <button className="litbtn3" id="moviles" onClick={handleClick}>
            <h1 className="titulo">Moviles</h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
