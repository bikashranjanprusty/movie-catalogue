import React from "react";
import { useSelectedMovie } from "../contexts/SelectedMovieContext";
const movieItemStyle = (selected) => {
  return {
    backgroundColor: selected ? "#a9b3c4" : "#ececec",
    fontWeight: selected ? "bold" : "normal",
    cursor: "pointer",
    paddingLeft: "0.75em",
    paddingRight: "0.75em",
    paddingTop: "0.2em",
    paddingBottom: "0.2em",
    color: "##1a1a1a"
  };
};

const MovieItem = ({ id, title, selected, movieItemCLick }) => {
  const { selectMovie } = useSelectedMovie();
  const movieItemCLickHandler = () => {
    selectMovie({ id, title });
    movieItemCLick(id);
  }

  return (
    <div style={movieItemStyle(selected)} onClick={movieItemCLickHandler}>
      {title}
    </div>
  );
};

export default MovieItem;