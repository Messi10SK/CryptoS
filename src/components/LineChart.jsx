import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"; // Don't get rid of this

function LineChart({ chartData, multiAxis }) {
  // Ensure the dataset colors are dark
  const darkColors = chartData.datasets.map((dataset, index) => {
    const color = index === 0 ? 'rgba(58, 128, 233, 0.8)' : 'rgba(97, 201, 111, 0.8)'; // Set different colors for Crypto 1 and Crypto 2
    return {
      ...dataset,
      borderColor: color, // Dark border color
      backgroundColor: 'rgba(0, 0, 0, 0.1)', // Slightly transparent background color
    };
  });

  const updatedChartData = {
    ...chartData,
    datasets: darkColors,
  };

  const options = {
    plugins: {
      legend: {
        display: multiAxis ? true : false,
        labels: {
          color: 'rgba(0, 0, 0, 0.8)', // Dark legend text color
        }
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      crypto1: {
        position: "left",
        ticks: {
          color: 'rgba(0, 0, 0, 0.8)', // Dark tick color
        },
      },
      crypto2: multiAxis && {
        position: "right",
        ticks: {
          color: 'rgba(0, 0, 0, 0.8)', // Dark tick color
        },
      },
    },
  };

  return <Line data={updatedChartData} options={options} />;
}

export default LineChart;

