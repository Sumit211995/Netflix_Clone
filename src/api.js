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


//Popular Movie API
export const PopularMovieListApi = async()=>{
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
    
    return response;
}
//Top rated Movie API
export const TopRatedMovieListApi = async()=>{
    const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
    
    return response;
}

//Upcoming Movie API
export const UpcomingMovieListApi = async()=>{
    const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
    
    return response;
}