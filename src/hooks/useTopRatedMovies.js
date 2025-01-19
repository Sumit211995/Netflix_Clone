import { useDispatch } from "react-redux";
import { TopRatedMovieListApi } from "../api";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  //fetch data from TMDB API and update store
  const dispatch = useDispatch();

  //API call
  const getTopRatedMovies = async () => {
    const data = await TopRatedMovieListApi();
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
