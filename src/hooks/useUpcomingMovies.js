import { useDispatch } from "react-redux";
import { UpcomingMovieListApi } from "../api";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  //fetch data from TMDB API and update store
  const dispatch = useDispatch();

  //API call
  const getUpcomingMovies = async () => {
    const data = await UpcomingMovieListApi();
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
