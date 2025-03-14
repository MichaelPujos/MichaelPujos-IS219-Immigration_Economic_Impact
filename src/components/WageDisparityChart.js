import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const WageDisparityChart = () => {
  const data = {
    labels: [2014, 2016, 2018, 2020, 2022, 2024],
    datasets: [
      {
        label: "Immigrant Wages",
        data: [30000, 32000, 35000, 40000, 46000, 52000],
        borderColor: "#1E88E5",
        backgroundColor: "#1E88E5",
        fill: false,
      },
      {
        label: "Native-Born Wages",
        data: [35000, 38000, 42000, 47000, 52000, 58000],
        borderColor: "#43A047",
        backgroundColor: "#43A047",
        fill: false,
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: "📉 Wage Disparities Among Immigrant Workers (2014-2024)",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `$${tooltipItem.raw} - Average wage in this year`;
          },
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default WageDisparityChart;
