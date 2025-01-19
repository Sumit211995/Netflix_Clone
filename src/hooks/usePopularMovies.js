import { useDispatch } from "react-redux";
import { PopularMovieListApi } from "../api";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  //fetch data from TMDB API and update store
  const dispatch = useDispatch();

  //API call
  const getPopularMovies = async () => {
    const data = await PopularMovieListApi();
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
