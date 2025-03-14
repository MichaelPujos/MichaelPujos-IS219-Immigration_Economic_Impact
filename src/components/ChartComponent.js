import React from "react";
import { Line, Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement);

const ChartComponent = ({ type, data, options }) => {
  switch (type) {
    case "line":
      return <Line data={data} options={options} />;
    case "bar":
      return <Bar data={data} options={options} />;
    case "pie":
      return <Pie data={data} options={options} />;
    default:
      return null;
  }
};

export default ChartComponent;
