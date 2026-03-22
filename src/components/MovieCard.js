import React from "react";
import "../styles.css";

export default function MovieCard({ movie }) {
  const handleError = (e) => {
    e.target.src = "images/default.jpg";
  };

  const getRatingClass = (rating) => {
    if (rating >= 8) return "rating-good";
    if (rating >= 5 && rating < 8) return "rating-ok";
    return "rating-bad";
  };

  return (
    <div key={movie.id} className="movie-card">
      <img
        src={`images/${movie.image}`}
        alt={movie?.title || "Defult Title - Test Error Handler"}
        onError={handleError}
      />
      <div className="movie-card-info">
        <h3 className="movie-card-title">
          {movie?.title || "Default Title - Test Error Handler"}
        </h3>
        <p className={`movie-card-genre ${getRatingClass(movie.rating)}`}>
          {movie.genre}
        </p>
        <p className={`movie-card-rating ${getRatingClass(movie.rating)}`}>
          {movie.rating}
        </p>
      </div>
    </div>
  );
}
