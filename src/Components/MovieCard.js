import React from "react";
import { IMG_CDN_URL } from "../utils/constatns";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-2">
      <img src={IMG_CDN_URL + posterPath} alt="" />
    </div>
  );
};

export default MovieCard;
