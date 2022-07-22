import "./Add.css";
import React, { useEffect, useState } from "react";
import ResultCard from "../ResultCard/ResultCard";
import ghibli from "../../ghibli-data.json";

export default function Add() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  // load all movies:
  useEffect(() => {
    setResults(ghibli);
  }, []);

  // filter by title:
  function inputChange(e) {
    e.preventDefault();
    setQuery(e.target.value);
    setResults(() =>
      ghibli.filter((movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      )
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
