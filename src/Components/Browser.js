import React, { useEffect } from "react";

import Header from "./Header";

import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";

const Browser = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  return (
    <div className=" hide-scrollbar ">
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browser;
