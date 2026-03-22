import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import "../styles.css";

export default function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");
  const [genreFilter, setGenreFilter] = useState("");
  const [minRating, setMinRating] = useState("");

  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  // Filter movies by title, genre, and rating safely
  const filteredMovies = movies.filter((movie) => {
    const matchesTitle =
      movie.title &&
      movie.title.toLowerCase().includes(searchMovie.toLowerCase());
    const matchesGenre =
      !genreFilter ||
      (movie.genre &&
        (Array.isArray(movie.genre)
          ? movie.genre.some((g) =>
              g.toLowerCase().includes(genreFilter.toLowerCase()),
            )
          : movie.genre.toLowerCase().includes(genreFilter.toLowerCase())));
    const matchesRating =
      !minRating || (movie.rating && movie.rating >= parseFloat(minRating));

    return matchesTitle && matchesGenre && matchesRating;
  });

  /* const selectedMovie = movies.find((m) => m.id === 11); */

  return (
    <div>
      <input
        type="text"
        placeholder="Search movies..."
        className="search-input"
        value={searchMovie}
        onChange={(e) => setSearchMovie(e.target.value)}
      />

      <div className="filter-bar">
        <div className="filter-slot">
          <label className="filter-label" htmlFor="genre-select">
            Genre:
          </label>
          <select
            id="genre-select"
            className="filter-dropdown"
            value={genreFilter}
            onChange={(e) => setGenreFilter(e.target.value)}
          >
            <option value="">All Genres</option>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Drama">Drama</option>
            <option value="Horror">Horror</option>
            {/* Add more genres dynamically if needed */}
          </select>
        </div>

        <div className="filter-slot">
          <label className="filter-label" htmlFor="rating-input">
            Rating:
          </label>
          <input
            id="rating-input"
            type="number"
            placeholder="Input/Select Values..."
            className="filter-dropdown"
            value={minRating}
            onChange={(e) => setMinRating(e.target.value)}
            min="0"
            max="10"
            step="0.1"
          />
        </div>
      </div>

      <div className="movies-grid">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))
        ) : (
          <p> Search criteria doesnt match.</p>
        )}

        {/* Get Selected Movie
          selectedMovie && <MovieCard movie={selectedMovie} />
        */}
      </div>
    </div>
  );
}
