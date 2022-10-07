import React, { Component } from "react";
import "./comics.css";
import { useState } from "react";
import { useRef } from "react";
import ComicForm from "./ComicForm";

import { useNavigate } from "react-router-dom";

const Comics = () => {
  const navigate = useNavigate();
  const ref = useRef(null);

  const handleClick = () => {
    navigate("/Home");
  };

  const handleClick2 = () => {
    navigate("/");
  };

  const [isShown, setIsShown] = useState(false);
  const [currentView, setCurrentView] = useState("posts");

  const getD = () => {
    fetch("http://localhost:8080/getAll")
      .then((response) => response.json())
      .then((data) => {
        const Title = document.getElementById("title").value;
        return data.filter((dbTitle) => dbTitle.title === Title).length > 0;
      })
      .then((titleExists) => {
        if (titleExists) {
          navigate("/Home");
        } else {
          setIsShown((current) => !current);
          ref.current?.scrollIntoView({ behavior: "smooth" });
        }
      });
  };
  return (
    <div className="comics">
      <div className="acc">
        <div className="profilePic"></div>
        <button className="createBtn" onClick={handleClick}>
          Main Page
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <button className="createBtn" onClick={() => setCurrentView("posts")}>
          See Posts
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <button className="createBtn" onClick={() => setCurrentView("create")}>
          Create post
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <button className="createBtn" onClick={handleClick2}>
          Log Out
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className="posts">
        {
          {
            posts: <h2>POSTS</h2>,
            create: (
              <div>
                <div className="formComics">
                  <label for="uname" className=" form__label">
                    <b>Title:</b>
                  </label>
                  <br></br>
                  <input
                    type="text"
                    placeholder="Enter title"
                    required
                    name="title"
                    className="title"
                    id="title"
                  ></input>
                </div>
                <button type="button" className="titleBtn" onClick={getD}>
                  Check
                </button>
                <div ref={ref}>{isShown && <ComicForm></ComicForm>}</div>
              </div>
            ),
          }[currentView]
        }
      </div>
    </div>
  );
};

/*<div ref={ref} className="threadsComics">
{isShown && <comicForm></comicForm>}
</div>*/
export default Comics;
