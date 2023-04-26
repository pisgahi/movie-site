import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeLayout from "./components/HomeLayout";
import Trending from "./components/pages/Trending";
import ComingSoon from "./components/pages/ComingSoon";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<HomeLayout />} />
          <Route path="/" element={<HomeLayout />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
