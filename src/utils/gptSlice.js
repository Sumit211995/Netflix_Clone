import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gptSlice",
    initialState: {
        showGptSearch: false,
    },
    reducers: {
        searchGptView:(state)=>{
            state.showGptSearch = !state.showGptSearch;
        }
    }
});


export const {searchGptView} = gptSlice.actions;

export default gptSlice.reducer;


