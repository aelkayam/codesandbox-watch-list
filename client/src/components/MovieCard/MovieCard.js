import "./MovieCard.css";
import React from "react";
import MovieControls from "../MovieControls/MovieControls";

export default function MovieCard({ movie, type }) {
  return (
    <div className="movie-card" key={movie.key}>
      <div className="overlay"></div>

      {<img src={movie.image} alt={`${movie.title} Poster`} />}

      <div className="info">
        <h3 className="title">{movie.title}</h3>
        <div className="description">{movie.description}</div>
      </div>

      <MovieControls movie={movie} type={type} />
    </div>
  );
}
