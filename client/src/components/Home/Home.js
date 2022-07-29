import "./Home.css";
import React from "react";
import Login from "../Login/Login";

export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="header">
          <h1 className="heading">Welcome to the Ghibli-Watchlist!</h1>
        </div>
        <ul className="bullet-points">
          <li>
            <i className="fa fa-ul fa-hand-point-right"></i> Keep track of your
            favorite films by Studio-Ghibli
          </li>
          <li>
            <i className="fa fa-ul fa-hand-point-right"></i> Sign in below to
            start adding movies
          </li>
          <li>
            <i className="fa fa-ul fa-hand-point-right"></i> Click the eye icon
            to mark it as WATCHED
          </li>
          <li>
            <i className="fa fa-ul fa-hand-point-right"></i> Click the X icon to
            remove from the list
          </li>
        </ul>
        <Login />
      </div>
    </div>
  );
}
