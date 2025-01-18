import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name: 'movie',
    initialState: {
        addMovie: null,
        addTrailer: null,
    },
    reducers: {
        addMovie: (state, action)=>{
            state.addMovie = action.payload;
        }, 
        addTrailerVideo: (state, action)=>{
            state.addTrailer = action.payload;
        }
    }
});

export const {addMovie, addTrailerVideo} = moviesSlice.actions;

export default moviesSlice.reducer;