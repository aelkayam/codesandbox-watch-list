import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";
import icon from "../../images/ghibli-icon.png";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <img className="header-logo" src={icon} alt="ghibli-icon" />
            <Link to="/">WatchList</Link>
          </div>

          {/* <div className="button">Change Background</div> */}

          <ul className="nav-links">
            <li>
              <Link to="/">Watch List</Link>
            </li>

            <li>
              <Link to="/watched">Watched</Link>
            </li>

            <li>
              <Link to="/add" className="button">
                Add
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
