import React from "react";
export default function Header() {
  console.log("Header component rendered");
  return (
    <div className="header">
      <img className="logo" src="logo.png" alt="moviedux" />
      <h2 className="app-subtittle">
        It's time for popcorn ! Find your next movie here.
      </h2>
    </div>
  );
}
