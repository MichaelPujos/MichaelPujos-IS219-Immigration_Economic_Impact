import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const RiskOccupationChart = () => {
  const data = {
    labels: ["Construction", "Agriculture", "Manufacturing", "Other High-Risk Jobs"],
    datasets: [
      {
        label: "Percentage of Immigrant Workers in High-Risk Occupations",
        data: [37, 22, 18, 23], // Percentages of immigrant workers
        backgroundColor: ["#E53935", "#FB8C00", "#8E24AA", "#43A047"],
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: "🏗️ Immigrants in High-Risk Occupations (2024)",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.raw}% of immigrant workers in this sector`;
          },
        },
      },
    },
  };

  return <Pie data={data} options={options} />;
};

export default RiskOccupationChart;
