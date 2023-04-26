import React from "react";
import Sidebar from "./Sidebar";
import Home from "./Home";

export default function HomeLayout() {
  return (
    <div className="home-layout__super--container">
      <div className="left__side">
        <Sidebar />
      </div>
      <div className="home-layout__container">
        <div className="right__side">
          <Home />
        </div>
      </div>
    </div>
  );
}
