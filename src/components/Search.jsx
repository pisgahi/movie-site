import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Search() {
  return (
    <div className="search__container">
      <div className="search__bar--container">
        <input placeholder="Search..." className="search__bar"></input>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="magnifying__glass"
        />
      </div>
    </div>
  );
}
