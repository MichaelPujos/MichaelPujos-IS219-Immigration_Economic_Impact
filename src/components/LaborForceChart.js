import React from "react";
import { Line } from "react-chartjs-2";

const LaborForceChart = () => {
  const data = {
    labels: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
    datasets: [
      {
        label: "Foreign-born (%)",
        data: [66.0, 66.1, 66.2, 66.3, 66.4, 66.5, 66.6, 66.7, 66.8, 66.9, 67.0],
        borderColor: "blue",
        fill: false
      },
      {
        label: "Native-born (%)",
        data: [62.0, 62.1, 62.2, 62.3, 62.4, 62.5, 62.6, 62.7, 62.8, 62.9, 63.0],
        borderColor: "red",
        fill: false
      }
    ]
  };

  return <Line data={data} />;
};

export default LaborForceChart;
