import React from "react";
import MovieInfo from "../atoms/MovieInfo";
import MovieLabel from "../atoms/MovieLabel";
import MoviePoster from "../atoms/MoviePoster";

const moviePreviewStyle = {
  padding: "0.75em",
  paddingTop: "1em",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%"
};

const MoviePreview = ({
  movieTitle,
  posterUrl,
  releaseYear,
  director,
  casts,
  genre
}) => {
  return (
    <div style={moviePreviewStyle}>
      <MoviePoster movieTitle={movieTitle} posterUrl={posterUrl} />
      <MovieLabel title={movieTitle} year={releaseYear} />
      <MovieInfo label={"Director"} value={director} />
      <MovieInfo label={"Casts"} value={casts} />
      <MovieInfo label={"Genre"} value={genre} />
    </div>
  );
};

export default MoviePreview;