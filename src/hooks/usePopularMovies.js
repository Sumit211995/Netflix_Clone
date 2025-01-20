import { useDispatch, useSelector } from "react-redux";
import { PopularMovieListApi } from "../api";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  //fetch data from TMDB API and update store
  const dispatch = useDispatch();
  //check popularMovies data available in the store
  const popularMovies = useSelector((store)=>store?.movies?.popularMovies);

  //API call
  const getPopularMovies = async () => {
    const data = await PopularMovieListApi();
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    //if data available then not call the api
    if(!popularMovies)
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
