import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const EconomicBenefitChart = () => {
  const data = {
    labels: [2000, 2005, 2010, 2015, 2020, 2024],
    datasets: [
      {
        label: "Immigrant Contribution to GDP (%)",
        data: [10, 15, 22, 28, 33, 38], // % of GDP attributed to immigrant labor
        borderColor: "#1E88E5",
        backgroundColor: "#1E88E5",
        fill: false,
      },
      {
        label: "Immigrant Share of Workforce (%)",
        data: [12, 14, 18, 21, 25, 28], // % of total labor force made up of immigrants
        borderColor: "#FDD835",
        backgroundColor: "#FDD835",
        fill: false,
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: "📈 Long-Term Economic Benefits of Immigration (2000-2024)",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.raw}% of total GDP or workforce`;
          },
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default EconomicBenefitChart;
