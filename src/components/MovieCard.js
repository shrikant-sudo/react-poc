import React from "react";

export default function MovieCard({ movie }) {
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
        <p className="movie-card-title">{movie.title}</p>
        <p className="movie-card-genre">{movie.genre}</p>
        <p className={`movie-card-rating ${getRatingClass(movie.rating)}`}>
          {movie.rating}
        </p>
      </div>
    </div>
  );
}
