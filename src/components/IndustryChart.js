import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const IndustryChart = () => {
  const data = {
    labels: ["Healthcare", "Construction", "Technology", "Agriculture", "Hospitality"],
    datasets: [
      {
        label: "Percentage of Immigrant Workers",
        data: [26, 22, 18, 14, 8], // Example data
        backgroundColor: ["#1E88E5", "#43A047", "#FDD835", "#E53935", "#8E24AA"],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "📊 Immigrant Workforce by Industry (2024)",
        font: {
          size: 18,
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const industry = tooltipItem.label;
            const percentage = tooltipItem.raw;
            let description = "";

            switch (industry) {
              case "Healthcare":
                description = "Healthcare employs 26% of immigrant workers, vital for patient care.";
                break;
              case "Construction":
                description = "Construction employs 22% of immigrants, filling labor shortages.";
                break;
              case "Technology":
                description = "Technology employs 18% of immigrants, driving innovation.";
                break;
              case "Agriculture":
                description = "Agriculture relies on 14% of immigrants for seasonal and essential work.";
                break;
              case "Hospitality":
                description = "Hospitality has 8% of immigrants, supporting tourism and service jobs.";
                break;
              default:
                description = "";
            }

            return `${industry}: ${percentage}% - ${description}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Industry Sectors",
          font: {
            size: 14,
          },
        },
      },
      y: {
        title: {
          display: true,
          text: "Percentage of Immigrant Workers",
          font: {
            size: 14,
          },
        },
        ticks: {
          callback: (value) => `${value}%`,
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default IndustryChart;
