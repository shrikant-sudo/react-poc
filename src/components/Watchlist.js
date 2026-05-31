import React from "react";

import MovieCard from "./MovieCard";

export default function Watchlist({ movies, watchlist, toggleWatchlist }) {
  return (
    <div className="tittle">
      <h1>My Watchlist</h1>
      <div className="watchlist">
        {watchlist.map((movieId) => {
          const movie = movies.find((m) => m.id === movieId);
          return (
            <MovieCard
              key={movie.id}
              movie={movie}
              toggleWatchlist={toggleWatchlist}
              isInWatchlist={true}
            ></MovieCard>
          );
        })}
      </div>
    </div>
  );
}
