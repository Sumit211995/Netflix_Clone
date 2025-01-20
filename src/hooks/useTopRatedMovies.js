import { useDispatch, useSelector } from "react-redux";
import { TopRatedMovieListApi } from "../api";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  //fetch data from TMDB API and update store
  const dispatch = useDispatch();
        //check topRatedMovies data available in the store
  const topRatedMovies = useSelector((store)=>store?.movies?.topRatedMovies);

  //API call
  const getTopRatedMovies = async () => {
    const data = await TopRatedMovieListApi();
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    //if data available then not call the api
    if(!topRatedMovies)
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
