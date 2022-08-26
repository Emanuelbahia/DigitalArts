import React from "react";
import "../assets/css/styles.css";

function Dashboard() {
  return (
    <div>
      <div className="container-h1">
        <h1>Dashboard de DigitalArts </h1>
      </div>
      <div className="container-dashboard">
        <div className="card">
          <h4>Cantidad de usuarios</h4>
        </div>
        <div className="card">
          <h4>Cantidad de productos</h4>
        </div>
        <div className="card">
          <h4>Cantidad de categorias</h4>
        </div>
        <div className="card">
          <h4>Cantidad de productos por categoria</h4>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
