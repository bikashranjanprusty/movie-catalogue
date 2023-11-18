import React from "react";

const moviePosterStyle = {
  borderRadius: "5%",
  maxWidth: "48vh",
  maxHeight: "60vh",
  width: "auto",
  height: "auto"
};

const MoviePoster = ({ movieTitle, posterUrl }) => {
  return <img style={moviePosterStyle} src={posterUrl} alt={movieTitle} />;
};

export default MoviePoster;