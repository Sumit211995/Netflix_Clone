import { useDispatch, useSelector } from "react-redux";
import { UpcomingMovieListApi } from "../api";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  //fetch data from TMDB API and update store
  const dispatch = useDispatch();
   //check upcomingMovies data available in the store
  const upcomingMovies = useSelector((store)=>store?.movies?.upcomingMovies);

  //API call
  const getUpcomingMovies = async () => {
    const data = await UpcomingMovieListApi();
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    //if data available then not call the api
    if(!upcomingMovies)
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
