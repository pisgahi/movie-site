import React from "react";
import TrendingPageApi from "./TrendingPageApi";
import Search from "./Search";

export default function TrendingLayout() {
  return (
    <div className="home-layout__container">
      <div className="home-layout__subcontainer">
        <div className="right__side">
          <div className="home__container">
            <div className="search__continer">
              <Search />
            </div>
            <div className="homepage__title--container">
              <h3 className="coming-soon__page--title text__white">Trending</h3>
            </div>
            <div className="latest__container">
              <TrendingPageApi />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
