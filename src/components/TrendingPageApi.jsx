import React, { useEffect, useState } from "react";
import api from "../API/tmdb";

export default function TrendingPageApi() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    getUpComingMovies();
  }, []);

  const getUpComingMovies = async () => {
    const { data } = await api.get("/trending/all/day");
    const results = data.results;
    console.log(results);
    setTrending(results);
  };

  const getMovieBackdrop = (backdrop_path) => {
    return `https://www.themoviedb.org/t/p/w533_and_h300_bestv2${backdrop_path}`;
  };

  return (
    <>
      {trending.slice(0, 20).map((latestMovie, index) => (
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
