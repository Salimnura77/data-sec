import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import Table from './table.js'


const SecurityChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = document.getElementById('securityChart').getContext('2d');

    const bootstrapBlue = 'rgba(0, 123, 255';

    const data = {
      labels: ['Confidentiality', 'Integrity', 'Availability', 'Authentication', 'Authorization'],
      datasets: [
        {
          label: 'Data Security Metrics',
          backgroundColor: `${bootstrapBlue}, 0.2)`,
          borderColor: `${bootstrapBlue}, 1)`,
          borderWidth: 1,
          hoverBackgroundColor: `${bootstrapBlue}, 0.4)`,
          hoverBorderColor: `${bootstrapBlue}, 1)`,
          data: [85, 70, 90, 80, 75],
        },
      ],
    };

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
          },
        },
      },
    });
  }, []);

  return (
    <div>
      <canvas id="securityChart" width="400" height="400"></canvas>

    </div>
  );
};

export default SecurityChart;
