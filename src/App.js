import React from "react";
// import logo from './logo.svg';
// import './App.css';
import { SelectedMovieProvider } from "./components/contexts/SelectedMovieContext";
import "./styles.css";

import Header from "./components/atoms/Header";
import MovieCatalogue from "./components/organisms/MovieCatalogue";
import data from "./static/movie-data.json";

function App() {
  return (
    <SelectedMovieProvider>
      <div className="App">
        <Header />
        <MovieCatalogue movieListData={data} />
      </div>
    </SelectedMovieProvider>
  );
}

export default App;
