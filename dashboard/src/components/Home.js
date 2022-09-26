import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  ArcElement,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Home() {
  //options y data para los datos del grafico de barra
  const options = {
    responsive: true,
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  };

  const data = {
    labels: [
      "Cuadros decorativos",
      "Abstracto espatula",
      "Abstracto pincel",
      "Artistas nuevos",
      "Pouring",
      "Fotomontaje",
    ],
    datasets: [
      {
        label: "Cantidad de cuadros por cada categoria",
        data: [40, 11, 10, 8, 6, 2],
        backgroundColor: "rgb(245 15 187)",
        hoverBackgroundColor: "#2b36bbe3",
      },
    ],
  };

  //aca pongo los datos para el grafico de torta de tipo de material
  const data1 = {
    labels: ["Bastidor en lienzo", "Bastidor macizo en madera", "Madera"],
    datasets: [
      {
        label: "Cantidad de cuadros por tipo de material",
        data: [27, 17, 2],
        backgroundColor: ["blue", "green", "orange"],
      },
    ],
  };

  //aca pongo los datos para el grafico de torta de la tecnica d pintura
  const data2 = {
    labels: [
      "Acrilico con espatula",
      "Acrilico con pincel",
      "Pouring",
      "Fotomontaje",
      "Impresion de vinilo mate con tintas de latex",
    ],
    datasets: [
      {
        label: "Cantidad de cuadros por tipo de tecnica",
        data: [20, 10, 6, 2, 9],
        backgroundColor: ["#620FA7 ", "#009EFF", "#FFA600", "black", "#36FF00"],
      },
    ],
  };

  return (
    <div className="home-bar">
      <div className="bar-graphic">
        <Bar options={options} data={data} />
      </div>
      <div className="box-pie">
        <div className="pie-graphic margin-right-pie">
          <p className="title-pie">Cantidad de cuadros por tipo de material</p>
          <Pie data={data1} />
        </div>
        <div className="pie-graphic">
          <p className="title-pie">Cantidad de cuadros por tipo de técnica</p>
          <Pie data={data2} />
        </div>
      </div>
    </div>
  );
}

export default Home;
