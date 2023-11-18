import React from "react";
import { useSelectedMovie } from "../contexts/SelectedMovieContext";

export const headerHeight = "60px";

const HeaderStyle = {
  height: headerHeight,
  backgroundColor: "#20232a",
  color: "#fff",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center"
};

const Header = () => {
  const { selectedMovie } = useSelectedMovie();
  return (
    <div className="header" style={HeaderStyle}>
      <h1>{`🎥 ${selectedMovie.title}`}</h1>
    </div>
  );
};

export default Header;