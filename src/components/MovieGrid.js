import React, { useState } from "react";
import MovieCard from "./MovieCard";

export default function MovieGrid({ movies, watchlist, toggleWatchlist }) {
  const [searchTerm, setSearchTerm] = useState([]);

  const [genre, setGenre] = useState("All Genres");
  const [rating, setRating] = useState("All Ratings");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const matchesSearchTerm = (movie, searchTerm) => {
    return String(movie.title)
      .toLowerCase()
      .includes(String(searchTerm).toLowerCase());
  };

  const handleGenreChange = (e) => {
    setGenre(e.target.value);
  };

  const matchesGenre = (movie, genre) => {
    return (
      genre === "All Genres" ||
      String(movie.genre).toLowerCase() === String(genre).toLowerCase()
    );
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const matchesRating = (movie, rating) => {
    switch (rating) {
      case "All Ratings":
        return true;
      case "Good":
        return movie.rating >= 8;
      case "OK":
        return movie.rating >= 5 && movie.rating < 8;
      case "Bad":
        return movie.rating < 5;
      default:
        return false;
    }
  };

  const filteredMovies = movies.filter(
    (movies) =>
      matchesGenre(movies, genre) &&
      matchesSearchTerm(movies, searchTerm) &&
      matchesRating(movies, rating),
  );

  return (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="filter-bar">
        <div className="filter-slot">
          <label>Genre:</label>
          <select
            className="filter-dropdown"
            value={genre}
            onChange={handleGenreChange}
          >
            <option>All Genres</option>
            <option>Action</option>
            <option>Drama</option>
            <option>Fantacy</option>
            <option>Horror</option>
          </select>
        </div>
        <div className="filter-slot">
          <label>Rating:</label>
          <select
            className="filter-dropdown"
            value={rating}
            onChange={handleRatingChange}
          >
            <option value="All Ratings">All Ratings</option>
            <option>Good</option>
            <option>Ok</option>
            <option>Bad</option>
          </select>
        </div>
      </div>
      <div className="movies-grid">
        {filteredMovies.map((movies) => (
          <MovieCard
            key={movies.id}
            movie={movies}
            toggleWatchlist={toggleWatchlist}
            isInWatchlist={watchlist.includes(movies.id)}
          ></MovieCard>
        ))}
      </div>
    </div>
  );
}
