import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

// Register necessary components for Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Wage trend data
const wageData = {
  labels: ["2014", "2016", "2018", "2020", "2022", "2024"],
  datasets: [
    {
      label: "Average Immigrant Wages ($)",
      data: [27000, 31000, 35000, 40000, 46000, 52000], // Example wage values
      borderColor: "#28a745",
      backgroundColor: "rgba(40, 167, 69, 0.2)",
      pointRadius: 5,
      pointHoverRadius: 7
    }
  ]
};

// Descriptions for tooltips
const wageDescriptions = {
  2014: "Immigrant workers earned an average of $27,000.",
  2016: "Wages increased due to higher labor demand ($31,000).",
  2018: "Economic growth contributed to wages rising to $35,000.",
  2020: "Despite the pandemic, wages climbed to $40,000.",
  2022: "Wages reached $46,000 as industries recovered.",
  2024: "Projected wages stand at $52,000 with steady job growth."
};

const options = {
  responsive: true,
  plugins: {
    tooltip: {
      callbacks: {
        label: function (tooltipItem) {
          let year = tooltipItem.label;
          let wage = tooltipItem.raw;
          let description = wageDescriptions[year] || "";
          return `${year}: $${wage.toLocaleString()}\n${description}`;
        }
      }
    }
  },
  scales: {
    y: {
      title: {
        display: true,
        text: "Average Annual Wages ($)"
      },
      ticks: {
        callback: (value) => `$${value.toLocaleString()}`
      }
    },
    x: {
      title: {
        display: true,
        text: "Year"
      }
    }
  }
};

const WageTrendChart = () => {
  return <Line data={wageData} options={options} />;
};

export default WageTrendChart;
