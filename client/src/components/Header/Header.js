import "./Header.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import icon from "../../images/ghibli-icon.png";
import { AuthContext } from "../../context/AuthContext";

export default function Header() {
  const { logged } = useContext(AuthContext);
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <img className="header-logo" src={icon} alt="ghibli-icon" />
            <Link to="/">WatchList</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/watchlist">Watch List</Link>
            </li>
            <li>
              <Link to="/watched">Watched</Link>
            </li>
            <li>
              {logged ? (
                <Link to="/add" className="button">
                  Add
                </Link>
              ) : (
                <button className="button" disabled={true}>
                  Add
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
