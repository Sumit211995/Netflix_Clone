import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies?.addMovie);
  const popularMovies = useSelector((store) => store?.movies?.popularMovies);
  const topRatedMovies = useSelector((store) => store?.movies?.topRatedMovies);
  const upcomingMovies = useSelector((store) => store?.movies?.upcomingMovies);
  if (!movies) return;
  console.log(movies);

  return (
    movies && (
      <div className="bg-black pb-20">
        <div className="2xl:-mt-80 xl:-mt-72 lg:-mt-48 md:-mt-32 mdmx:-mt-12 z-20 relative sm:pl-8 ">
          {movies && <MovieList title={"Now Playing"} movies={movies} />}
          {topRatedMovies && (
            <MovieList title={"Top-Rated"} movies={topRatedMovies} />
          )}
          {popularMovies && (
            <MovieList title={"Popular"} movies={popularMovies} />
          )}
          {upcomingMovies && (
            <MovieList title={"Upcoming-Movies"} movies={upcomingMovies} />
          )}
          <MovieList title={"Horror"} movies={movies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
