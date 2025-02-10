import React, { useState } from "react";
import MovieCard from "./MovieCard";
import { MovieTrailerApi } from "../api";

const MovieList = ({ title, movies }) => {
  const [hoveredMovie, setHoveredMovie] = useState(null);
  const [trailerKey, setTrailerKey] = useState(null);

  const fetchTrailer = async (movieId) => {
    try {
      const res = await MovieTrailerApi(movieId);
      const data = await res.json();
      // Get the first available YouTube trailer
      const trailer = data.results.find(
        (vid) => vid.type === "Trailer" && vid.site === "YouTube"
      );
      if (trailer) {
        setTrailerKey(trailer.key);
      }
    } catch (error) {
      console.error("Error fetching trailer:", error);
    }
  };

  return (
    <div className="sm:pl-8 pl-4">
      <h1 className="md:text-2xl text-md py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll hide-scrollbar">
        <div className="flex gap-4">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="relative w-full h-full rounded-lg overflow-hidden cursor-pointer"
              onMouseEnter={() => {
                setHoveredMovie(movie.id);
                fetchTrailer(movie.id);
              }}
              onMouseLeave={() => {
                setHoveredMovie(null);
                setTrailerKey(null);
              }}
            >
              {hoveredMovie === movie.id && trailerKey ? (
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              ) : (
                <MovieCard posterPath={movie?.poster_path} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
