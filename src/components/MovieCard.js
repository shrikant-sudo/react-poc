import React from "react";

export default function MovieCard({ movie, isInWatchlist, toggleWatchlist }) {
  const handleError = (e) => {
    e.target.src = "images/default.jpg";
  };

  const getRatingClass = (rating) => {
    if (rating >= 8) return "rating-good";
    else if (rating >= 5 && rating < 8) return "rating-ok";
    else return "rating-bad";
  };

  return (
    <div className="movie-card" key={movie.id}>
      <img
        src={`images/${movie.image}`}
        alt={movie.title}
        onError={handleError}
      />
      <div className="movie-card-info">
        <span className="movie-card-title">{movie.title}</span>
        <div>
          <span className="movie-card-genre">{movie.genre}</span>
          <span className={`movie-card-rating ${getRatingClass(movie.rating)}`}>
            {movie.rating}
          </span>
          <label className="switch">
            <input
              type="checkbox"
              checked={isInWatchlist}
              onChange={() => toggleWatchlist(movie.id)}
            ></input>
            <span className="slider">
              <span className="slider-label">
                {isInWatchlist ? "In Watchlist" : "Add to Watchlist"}
              </span>
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}
