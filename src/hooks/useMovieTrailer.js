import { useDispatch } from "react-redux";
import { MovieTrailerApi } from "../api";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  //fetch trailer video && updating the store with trailer video data

  //movie video api and it's provide multiple videos including Trailer
  //In this we also got youtube video key
  const movieTrailer = async () => {
    const data = await MovieTrailerApi(movieId);
    const json = await data.json();
    const filterData = json?.results?.filter(
      (video) => video.type === "Trailer"
    );

    //if trailer is not available in filter data then use first video
    const trailer = filterData?.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    movieTrailer();
  }, []);
};

export default useMovieTrailer;
