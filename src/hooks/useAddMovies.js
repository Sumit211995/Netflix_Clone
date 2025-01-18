import { useDispatch } from "react-redux";
import { MovieListApi } from "../api";
import { addMovie } from "../utils/moviesSlice";
import { useEffect } from "react";

const useAddMovies = () => {
  //fetch data from TMDB API and update store
  const dispatch = useDispatch();

  //API call
  const nowPlayingMovieList = async () => {
    const data = await MovieListApi();
    const json = await data.json();
    dispatch(addMovie(json.results));
  };

  useEffect(() => {
    nowPlayingMovieList();
  }, []);
};

export default useAddMovies;
