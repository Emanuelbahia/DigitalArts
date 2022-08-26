import React from "react";
import "../assets/css/styles.css";
import TotalCategories from "./TotalCategories";
import TotalProducts from "./TotalProducts";

function Dashboard() {
  return (
    <React.Fragment>
      <div>
        <div className="container-h1 header">
          <h1>Dashboard de DigitalArts </h1>
        </div>

        <div className="container">
          <div className="sidebar">sidebar</div>
          <div className="main-cards">
            <div className="card">
              <h4>Cantidad de usuarios</h4>
            </div>

            <TotalProducts />
            <TotalCategories />

            <div className="card">
              <h4>Total de productos por categoria</h4>
            </div>
          </div>
        </div>
        <div className="footer"></div>
      </div>
    </React.Fragment>
  );
}

export default Dashboard;
