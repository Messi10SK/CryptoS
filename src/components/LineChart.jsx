import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function LineChart({ chartData, multiAxis }) {
  const options = {
    plugins: {
      legend: {
        display: multiAxis ? true : false,
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      crypto1: {
        type: 'linear',
        display: true,
        position: "left",
      },
      ...(multiAxis && {
        crypto2: {
          type: 'linear',
          display: true,
          position: "right",
          grid: {
            drawOnChartArea: false, // only want the grid lines for one axis
          },
        },
      }),
    },
  };

  return <Line data={chartData} options={options} />;
}

export default LineChart;
