import React from "react";
import requests from "./requests";
import "./App.css";
import Row from "./Row";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />

      <Row
        title="Netflix Original"
        fetchUrl={requests.fetchNetflixOriginals}
        isLarge
      />
      <Row title="ActionMovies" fetchUrl={requests.fetchTrending} />
      <Row title="Trending Now" fetchUrl={requests.fetchActionMovies} />
      <Row title="ComedyMovies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="HorrorMovies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="RomanceMovies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="TopRated" fetchUrl={requests.fetchTopRated} />
    </div>
  );
}

export default App;
