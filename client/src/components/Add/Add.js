import "./Add.css";
import React, { useEffect, useState } from "react";
import ResultCard from "../ResultCard/ResultCard";

export default function Add() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  // load all movies:
  useEffect(() => {
    fetch("http://localhost:3001/ghibli-data").then((res) =>
      res.json().then((data) => {
        if (!data.errors) {
          setResults(data);
        } else {
          setResults([]);
        }
      })
    );
  }, []);

  // filter by title:
  function inputChange(e) {
    e.preventDefault();
    setQuery(e.target.value);

    fetch("http://localhost:3001/ghibli-data").then((res) =>
      res.json().then((data) => {
        if (!data.errors) {
          setResults(() =>
            data.filter((movie) =>
              movie.title.toLowerCase().includes(query.toLowerCase())
            )
          );
        } else {
          setResults([]);
        }
      })
    );
  }

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="search for a movie"
              value={query}
              onChange={inputChange}
            />
          </div>
          {results.length > 0 && (
            <ul className="results">
              {results.map((movie) => (
                <li key={movie.id}>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
