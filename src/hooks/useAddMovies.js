import { useDispatch, useSelector } from "react-redux";
import { MovieListApi } from "../api";
import { addMovie } from "../utils/moviesSlice";
import { useEffect } from "react";

const useAddMovies = () => {
  //fetch data from TMDB API and update store
  const dispatch = useDispatch();
  //check nowPlaying data available in the store
  const nowPlayingMovie = useSelector((store)=>store?.movies?.addMovie);

  console.log(nowPlayingMovie);

  //API call
  const nowPlayingMovieList = async () => {
    const data = await MovieListApi();
    const json = await data.json();
    dispatch(addMovie(json.results));
  };

  useEffect(() => {
    //if data available then not call the api
    if(!nowPlayingMovie)
    nowPlayingMovieList();
  }, []);
};

export default useAddMovies;
