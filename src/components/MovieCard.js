import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if(!posterPath) return null;
  return (
    <div className=" w-48">
      <img alt="Movie" src={IMG_CDN_URL + posterPath} className="rounded-md" />
    </div>
  );
};

export default MovieCard;
