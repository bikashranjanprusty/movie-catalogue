import React, { createContext, useContext, useState } from "react";
import data from "../../static/movie-data.json";

const SelectedMovieContext = createContext();

export const SelectedMovieProvider = ({ children }) => {
  const [selectedMovie, setSelectedMovie] = useState({id: data[0].id, title: data[0].title});

  const selectMovie = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <SelectedMovieContext.Provider value={{ selectedMovie, selectMovie }}>
      {children}
    </SelectedMovieContext.Provider>
  );
};

export const useSelectedMovie = () => {
  return useContext(SelectedMovieContext);
};