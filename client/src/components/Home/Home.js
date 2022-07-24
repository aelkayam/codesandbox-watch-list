import "./Home.css";
import React from "react";

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
            <i className="fa fa-ul fa-hand-point-right"></i> Click on ADD to add
            a new film to your watch list
          </li>
          <li>
            <i className="fa fa-ul fa-hand-point-right"></i> Click on the eye to
            mark it as WATCHED
          </li>
          <li>
            <i className="fa fa-ul fa-hand-point-right"></i> Click the X icon to
            remove it from your list
          </li>
        </ul>
      </div>
    </div>
  );
}
