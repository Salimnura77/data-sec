import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import CustomCard from "./CustomCard.js"

const SecurityChart = () => {
  const chartRef = useRef(null);
  const chartData = {
    labels: ['Delivery Time', 'Vehicle Capacity', 'Route Efficiency', 'Fuel Efficiency', 'Driver Performance'],
    datasets: [
      {
        label: 'Transport and Logistics Metrics',
        backgroundColor: 'rgba(25, 25, 25, 0.2)', // Dark background color
        borderColor: 'rgba(25, 25, 25, 1)', // Dark border color
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(25, 25, 25, 0.4)', // Dark hover background color
        hoverBorderColor: 'rgba(25, 25, 25, 1)', // Dark hover border color
        data: [85, 70, 90, 80, 75],
      },
    ],
  };

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const newChart = new Chart(ctx, {
      type: 'bar',
      data: chartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
          },
        },
        plugins: {
          legend: {
            display: true,
            position: 'top',
            labels: {
              boxWidth: 20,
              font: {
                size: 12,
              },
            },
          },
        },
      },
    });

    // Cleanup function to prevent memory leaks
    return () => {
      newChart.destroy();
    };
  }, []);

  return (
    <>
      <CustomCard/>
      <div style={{ boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)', borderRadius: '8px', overflow: 'hidden' }}>
        <canvas ref={chartRef} width="400" height="400"></canvas>
      </div>
    </>
  );
};

export default SecurityChart;
