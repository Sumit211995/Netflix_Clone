import { API_OPTIONS } from "./utils/constants";

//Movie List API
export const MovieListApi = async()=>{
    const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    
    return response;
}

//Maincontainer Movie video or trailer API
export const MovieTrailerApi = async(movieId)=>{
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);

    return response;
}