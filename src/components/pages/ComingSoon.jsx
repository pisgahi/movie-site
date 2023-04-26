import React from "react";
import Sidebar from "../Sidebar";
import PageLayout from "../ComingSoonLayout";

export default function ComingSoon() {
  return (
    <div className="comingsoon__super--container">
      <div className="left__side">
        <Sidebar />
      </div>
      <PageLayout />
    </div>
  );
}
