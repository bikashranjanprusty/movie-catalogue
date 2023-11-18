import React from "react";

const MovieLabel = ({ title, year }) => {
  return <h3>{`${title} (${year})`}</h3>;
};

export default MovieLabel;