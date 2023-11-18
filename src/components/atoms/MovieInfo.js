import React from "react";

const MovieInfo = ({ label, value }) => {
  return (
    <div>
      <span>
        <strong>{`${label}: `}</strong>
      </span>
      <span>{value}</span>
    </div>
  );
};

export default MovieInfo;