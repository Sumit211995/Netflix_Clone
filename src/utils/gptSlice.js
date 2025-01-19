import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gptSlice",
    initialState: {
        showGptSearch: false,
        movieResults: null,
        movieNames: null,
    },
    reducers: {
        searchGptView:(state)=>{
            state.showGptSearch = !state.showGptSearch;
        },
        addGPTMovieResult:(state, action)=>{
            const {movieNames, movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        }, 
        removeGPTMovieResult:(state)=>{
            state.movieNames = null;
            state.movieResults = null;
        }
    }
});


export const {searchGptView, addGPTMovieResult, removeGPTMovieResult} = gptSlice.actions;

export default gptSlice.reducer;


