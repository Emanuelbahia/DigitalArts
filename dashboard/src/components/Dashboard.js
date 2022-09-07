import React from "react";
import "../assets/css/styles.css";
import LinkCategories from "./LinkCategories";
import LinkUsers from "./LinkUsers";
import TotalUsers from "./TotalUsers";
import TotalCategories from "./TotalCategories";
import TotalProducts from "./TotalProducts";
import Home from "./Home";
import LinkProducts from "./LinkProducts";
import LinkLastProducts from "./LinkLastProducts";
import { Routes, Route } from "react-router-dom";
import LinkLastUser from "./LinkLastUser";

function Dashboard() {
  return (
    <React.Fragment>
      <div className="main">
        <div className="main-cards">
          <TotalUsers />
          <TotalProducts />
          <TotalCategories />
        </div>
        <div className="container-lists">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/LinkCategories" element={<LinkCategories />} />
            <Route path="/LinkUsers" element={<LinkUsers />} />
            <Route path="/LinkProducts" element={<LinkProducts />} />
            <Route path="/LinkLastProducts" element={<LinkLastProducts />} />
            <Route path="/LinkLastUser" element={<LinkLastUser />} />
          </Routes>
        </div>
        <div className="footer"></div>
      </div>
    </React.Fragment>
  );
}

export default Dashboard;
