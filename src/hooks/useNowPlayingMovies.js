import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constatns";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const movieListFetch = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/discover/movie?&page=1",
      API_OPTIONS
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    dispatch(addNowPlayingMovies(data.results));
  };
  useEffect(() => {
    movieListFetch();
  }, []);
};

export default useNowPlayingMovies;
