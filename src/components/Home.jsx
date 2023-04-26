import React from "react";
import PopularMovie from "./PopularMovie";
import UpComingMovies from "./UpComingMovies";
import Featured from "./Featured";
import Search from "./Search";

export default function Home() {
  return (
    <div className="home__container">
      <div className="search__continer">
        <Search />
      </div>
      <div className="featured__container">
        <Featured />
      </div>
      <div className="homepage__title--container">
        <h3 className="hompegae__title text__white">Popular</h3>
      </div>
      <div className="popular__movies">
        <PopularMovie />
      </div>
      <div className="homepage__title--container">
        <h3 className="hompegae__title text__white">Coming Soon</h3>
      </div>
      <div className="latest__container">
        <UpComingMovies />
      </div>
    </div>
  );
}
