import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_IMG } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="">
      <div className="fixed -z-10 bg-cover bg-center max-w-[100%] min-w-[1284px]">
        <img src={BG_IMG} className=""/>
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
