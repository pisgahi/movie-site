import React, { useEffect, useState } from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import api from "../API/tmdb";

export default function Featured() {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    getFeaturedBanner();
    featuredBackDrop();
  }, []);

  const getFeaturedBanner = async () => {
    const { data } = await api.get("/trending/all/day");
    const results = data.results;
    const randomNum = Math.floor(Math.random() * 20);
    setFeatured(results[randomNum]);
  };

  const featuredBackDrop = (backdrop_path) => {
    return `https://image.tmdb.org/t/p/original${backdrop_path}`;
  };

  return (
    <div className="featured__container">
      <img
        src={featuredBackDrop(featured.backdrop_path)}
        alt=""
        className="featured__img"
      />
      <div className="featured__container--component">
        <div className="info__container">
          <div className="title__featured--container">
            <h1 className="title__featured">
              {featured.title || featured.name}
            </h1>
          </div>
          <div className="rating__date--container">
            <FontAwesomeIcon icon={faStar} className="text__white fa__shadow" />{" "}
            <span className="text__white text__shadow">
              {Number(featured.vote_average).toFixed(2)}
              <span className="interpunct"> · </span>
            </span>
            <span className="text__white text__shadow">
              {featured.release_date || featured.first_air_date}
            </span>
          </div>
          <div className="btn__container">
            <button className="more__info--btn">More</button>
          </div>
        </div>
      </div>
    </div>
  );
}
