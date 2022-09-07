import React from "react";

import { MDBContainer } from "mdbreact";
import { Bar } from "react-chartjs-2";

function Home() {
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
        label: "Categoria de Cuadros",
        backgroundColor: "green",
        borderColor: "black",
        fill: true,
        hoverBackgroundColor: "orange",
        data: [11, 10, 9, 8, 6, 2],
      },
    ],
  };

  return (
    <MDBContainer>
      <Bar data={data} />
    </MDBContainer>
  );
}

export default Home;
