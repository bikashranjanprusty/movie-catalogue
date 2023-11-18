import React from "react";
import MovieItem from "../atoms/MovieItem";


const movieListStyles = {
  backgroundColor: "#ececec",
  height: "100%",
  paddingTop: "1em",
  width: "100%",
  display: "flex",
  flexDirection: "column"
};

const MovieList = ({ movieItemList, selectedMovieId, setSelectedMovie }) => {
  const movieItemCLickHandler = (id) => {
    setSelectedMovie(id);
  }  
  return (
    <div style={movieListStyles}>
      {movieItemList.map(({ id, title }) => {
        return (
          <MovieItem
            key={id}
            id={id}
            title={title}
            selected={id === selectedMovieId} 
            movieItemCLick={movieItemCLickHandler}          
          />
        );
      })}
    </div>
  );
};

export default MovieList;