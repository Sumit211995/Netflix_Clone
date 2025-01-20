import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if(!posterPath) return null;
  return (
    <div className="md:w-48 w-32">
      <img alt="Movie" src={IMG_CDN_URL + posterPath} className="rounded-md" />
    </div>
  );
};

export default MovieCard;
