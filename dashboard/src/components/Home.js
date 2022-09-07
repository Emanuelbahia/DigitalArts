import React from "react";
import { Bar } from "react-chartjs-2";

function Home() {
  /*  const data = {
    labels: [
      "Abstracto espatula",
      "Abstracto pincel",
      "Cuadros decorativos",
      "Artistas nuevos",
      "Pouring",
      "Fotomontaje",
    ],
    datasets: [
      {
        label: "Categoria de Cuadros",
        backgroundColor: "green",
        borderColor: "black",
        borderWidth: 1,
        hoverBackgroundColor: "orange",
        data: [11, 10, 9, 8, 6, 2],
      },
    ],
  };

  const opciones = {
    maintainAspectRatio: false,
    responsive: true,
  }; */

  return (
    <div>
      <h2>Cantidad de cuadros por categoria</h2>
      {/* {<Bar data={data} options={opciones} />} */}
    </div>
  );
}

export default Home;
