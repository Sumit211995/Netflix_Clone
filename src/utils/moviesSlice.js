import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name: 'movie',
    initialState: {
        addMovie: null,
        addTrailer: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
    },
    reducers: {
        addMovie: (state, action)=>{
            state.addMovie = action.payload;
        }, 
        addPopularMovies: (state, action)=>{
            state.popularMovies = action.payload;
        }, 
        addTopRatedMovies: (state, action)=>{
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action)=>{
            state.upcomingMovies = action.payload;
        }, 
        addTrailerVideo: (state, action)=>{
            state.addTrailer = action.payload;
        }
    }
});

export const {addMovie, addTrailerVideo, addPopularMovies, addTopRatedMovies, addUpcomingMovies} = moviesSlice.actions;

export default moviesSlice.reducer;