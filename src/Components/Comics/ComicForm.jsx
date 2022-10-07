import React from "react";
import "./comicform.css";

const comicForm = () => {
  return (
    <div className="comicForm">
      <div className="FormComic">
        <input type="textArea" className="textA" wrap="hard"></input>
        <div className="categoryBtn">
          <button className="categoryBtn1">
            <h1 className="categorytitulo">Doubt</h1>
          </button>
          <button className="categoryBtn2">
            <h1 className="categorytitulo2">Suggestion</h1>
          </button>
          <button className="categoryBtn3">
            <h1 className="categorytitulo2">Clarification</h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default comicForm;
