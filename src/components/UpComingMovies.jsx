import React, { useEffect, useState } from "react";
import api from "../API/tmdb";

export default function UpComingMovies() {
  const [latest, setLatest] = useState([]);

  useEffect(() => {
    getUpComingMovies();
  }, []);

  const getUpComingMovies = async () => {
    const { data } = await api.get("/movie/upcoming");
    const results = data.results;
    setLatest(results);
  };

  const getMovieBackdrop = (backdrop_path) => {
    return `https://www.themoviedb.org/t/p/w533_and_h300_bestv2${backdrop_path}`;
  };

  return (
    <>
      {latest.slice(0, 8).map((latestMovie, index) => (
        <div className="upcoming__movie--container" key={index}>
          <div className="upcoming__movie--img">
            <img
              src={getMovieBackdrop(latestMovie.backdrop_path)}
              alt=""
              className="movie__backdrop--upcoming"
            />
          </div>
          <div className="upcoming__movie__title">
            <h3>{latestMovie.title}</h3>
          </div>
        </div>
      ))}
    </>
  );
}
