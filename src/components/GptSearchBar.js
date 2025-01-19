import React, { useEffect, useRef, useState } from "react";
import Search from "../images/search.svg";
import { BG_IMG } from "../utils/constants";
import lang from "../utils/languageConst";
import { useDispatch, useSelector } from "react-redux";
import { DiscoverMovieApi, SearchMovieApi } from "../api";
import { addGPTMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();
  const searchInputData = useRef(null);

  const genreMapping = {
    action: 28, // Action
    adventure: 12, // Adventure
    animation: 16, // Animation
    comedy: 35,
    funny: 35, // Comedy
    crime: 80, // Crime
    documentary: 99, // Documentary
    drama: 18, // Drama
    family: 10751, // Family
    fantasy: 14, // Fantasy
    history: 36, // History
    horror: 27, // Horror
    music: 10402, // Music
    mystery: 9648, // Mystery
    romance: 10749, // Romance
    scienceFiction: 878, // Science Fiction
    tvMovie: 10770, // TV Movie
    thriller: 53, // Thriller
    war: 10752, // War
    western: 37, // Western
  };

  const getGenreId = (query) => {
    const matchedGenre = Object.keys(genreMapping).find((genre) =>
      query.toLowerCase().includes(genre)
    );
    return genreMapping[matchedGenre];
  };

  const searchMovieTMDB = async (movie) => {
    const validMovies = movie.trim("");
    const data = await SearchMovieApi(validMovies);

    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClcik = async () => {
    console.log(searchInputData.current.value);
    //Make an API call to GPT API  with OPENAI and get Movies results
    const query = searchInputData.current.value;

    const genreID = await getGenreId(query);
    if (!genreID) return;
    try {
      if (genreID) {
        const response = await DiscoverMovieApi(genreID);
        const discoverData = await response.json();
        const results = discoverData.results;
        const finalMovie = results.slice(15);
        //Get movie title
        const movieTitle = finalMovie.map((movie) => movie.title);
        console.log(movieTitle);

        //For each movie I will search TMDB API
        const promiseArray = movieTitle.map((movie) => searchMovieTMDB(movie));
        //    //it returns us promise array so we use Promise.all and wait for result
        const tmdbResult = await Promise.all(promiseArray);
        //     const movie = "Sonic the Hedgehog 3";
        //   const tmdbResult =  await searchMovieTMDB(movie)
        dispatch(
          addGPTMovieResult({
            movieNames: movieTitle,
            movieResults: tmdbResult,
          })
        );
        console.log(tmdbResult);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="pt-[10%] w-full h-screen"
      //   style={{
      //     background: `url(${BG_IMG})`,
      //     backgroundSize: "cover",
      //     backgroundPosition: "center",
      //     backgroundRepeat: "no-repeat",
      //     backgroundColor: "black",
      //     maxWidth: "100%", // Prevent overflow
      //     minWidth: "320px", // Ensure it doesn't shrink below this width
      //   }}
    >
      <form
        className="flex items-center w-full justify-center"
        onClick={(e) => e.preventDefault()}
      >
        <div className="flex p-4 bg-black w-[50%] gap-8 items-center rounded-md">
          <input
            ref={searchInputData}
            type="text"
            className="h-10 p-4 w-[80%]"
            placeholder={lang[langKey].searchPlaceholder}
          />
          <button
            className="text-white px-4 w-[20%] py-2 bg-red-700 rounded-lg flex items-center gap-4 font-bold"
            onClick={handleGptSearchClcik}
          >
            <img
              src={Search}
              className="w-6 h-6 fill-white text-white"
              alt="Search"
            />
            {lang[langKey].search}
          </button>
        </div>
      </form>
    </div>
  );
};

export default GptSearchBar;
