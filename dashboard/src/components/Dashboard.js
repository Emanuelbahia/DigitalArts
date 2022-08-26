import React from "react";
import "../assets/css/styles.css";
import TotalCategories from "./TotalCategories";
import TotalProducts from "./TotalProducts";

function Dashboard() {
  return (
    <div>
      <div className="container-h1 header">
        <h1>Dashboard de DigitalArts </h1>
      </div>
      <div className="container">
        <div className="card">
          <h4>Cantidad de usuarios</h4>
        </div>

        <TotalProducts />

        <div className="card">
          <h4>Cantidad de categorias</h4>
        </div>

        <TotalCategories />
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default Dashboard;
