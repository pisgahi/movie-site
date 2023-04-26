import React, { useEffect, useState } from "react";
import api from "../API/tmdb";

export default function PopularMovie() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopularMovies();
  }, []);
  const getPopularMovies = async () => {
    const { data } = await api.get("/trending/all/day");
    const results = data.results;
    setPopular(results);
  };

  const getMoviePoster = (poster_path) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`;
  };

  return (
    <>
      {popular.slice(0, 4).map((movie, index) => (
        <div className="popular__movie--container" key={index}>
          <div className="movie__img--container">
            <img
              src={getMoviePoster(movie.poster_path)}
              alt=""
              className="movie__img--popular"
            />
          </div>
          <div className="movie__info">
            <h4 className="title--popular">{movie.title || movie.name}</h4>
            <h5 className="release__date--popular">
              {movie.release_date || movie.first_air_date}
            </h5>
            <h5 className="rating--popular">
              {movie.vote_average.toFixed(2)}/10
            </h5>
          </div>
        </div>
      ))}
    </>
  );
}
