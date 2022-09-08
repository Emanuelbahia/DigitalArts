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
  const options = {
    responsive: true,
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  };

  const data = {
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
        label: "Cantidad de cuadros por cada categoria",
        data: [11, 10, 9, 8, 6, 2],
        backgroundColor: "rgb(245 15 187)",
        hoverBackgroundColor: "#2b36bbe3",
      },
    ],
  };

  const data1 = {
    labels: ["Bastidor en lienzo", "Bastidor macizo en mader", "Madera"],
    datasets: [
      {
        label: "Cantidad de cuadros por tipo de material",
        data: [27, 17, 2],
        backgroundColor: ["blue", "green", "orange"],
      },
    ],
  };

  return (
    <div className="home-bar">
      <div className="bar-graphic">
        <Bar options={options} data={data} />
      </div>
      <div className="pie-graphic">
        <Pie data={data1} />
      </div>
    </div>
  );
}

export default Home;
