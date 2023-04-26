import React from "react";
import "../styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowTrendUp,
  faGear,
  faHouse,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar__container">
      <div className="logo__container">
        <img className="logo" src={logo} alt="Logo" />
      </div>
      <div className="news__feed">
        <div className="news__selection">
          <Link to="/" className="news__feed--selector section__links">
            <FontAwesomeIcon icon={faHouse} className="fa__icon" />
            <span className="sidebar__titles">Home</span>
          </Link>
        </div>
        <div className="news__selection">
          <Link to="/trending" className="news__feed--selector section__links">
            <FontAwesomeIcon icon={faArrowTrendUp} className="fa__icon" />
            <span className="sidebar__titles">Trending</span>
          </Link>
        </div>
        <div className="news__selection">
          <Link
            to="/comingsoon"
            className="news__feed--selector section__links"
          >
            <FontAwesomeIcon icon={faCalendarDays} className="fa__icon" />
            <span className="sidebar__titles">Coming Soon</span>
          </Link>
        </div>
      </div>
      <div className="settings__container">
        <div className="settings__item--c settings__items">
          <a className="section__links no-cursor">
            <FontAwesomeIcon icon={faGear} className="fa__icon" />
            <span className="sidebar__titles">Settings</span>
          </a>
        </div>
        <div className="settings__item--c settings__items">
          <a className="section__links no-cursor">
            <FontAwesomeIcon icon={faUser} className="fa__icon" />
            <span className="sidebar__titles">Account</span>
          </a>
        </div>
        <div className="settings__item--c settings__items">
          <a className="section__links no-cursor">
            <FontAwesomeIcon icon={faRightFromBracket} className="fa__icon" />
            <span className="sidebar__titles">Log Out</span>
          </a>
        </div>
      </div>
    </div>
  );
}
