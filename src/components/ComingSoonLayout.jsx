import React from "react";
import Search from "./Search";
import ComingSoonPageApi from "./ComingSoonPageApi";

export default function PageLayout() {
  return (
    <div className="home-layout__container">
      <div className="home-layout__subcontainer">
        <div className="right__side">
          <div className="home__container">
            <div className="search__continer">
              <Search />
            </div>
            <div className="homepage__title--container">
              <h3 className="coming-soon__page--title text__white">
                Coming Soon
              </h3>
            </div>
            <div className="latest__container">
              <ComingSoonPageApi />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
