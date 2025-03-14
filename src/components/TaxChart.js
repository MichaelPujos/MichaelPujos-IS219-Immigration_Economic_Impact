import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TaxChart = () => {
  const data = {
    labels: ["Federal Taxes", "State Taxes", "Local Taxes"],
    datasets: [
      {
        label: "Tax Contributions (Billion $)",
        data: [330, 100, 62], 
        backgroundColor: ["#1E88E5", "#43A047", "#FDD835"],
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: "💰 Tax Contributions by Immigrants (2024)",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `$${tooltipItem.raw} billion - Revenue collected from immigrant workers`;
          },
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default TaxChart;
