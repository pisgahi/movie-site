import React from "react";
import Sidebar from "../Sidebar";
import TrendingLayout from "../TrendingLayout";

export default function Trending() {
  return (
    <div className="trending__super--container">
      <div className="left__side">
        <Sidebar />
      </div>
      <TrendingLayout />
    </div>
  );
}
