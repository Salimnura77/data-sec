import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import Table from './table.js';

const SecurityChart = () => {
  const barChartRef = useRef(null);
  const doughnutChartRef = useRef(null);
  const lineChartRef = useRef(null);
  const radarChartRef = useRef(null);

  useEffect(() => {
    // Bar Chart
    const barCtx = document.getElementById('barChart').getContext('2d');
    const barData = {
      labels: ['Confidentiality', 'Integrity', 'Availability', 'Authentication', 'Authorization'],
      datasets: [
        {
          label: 'Data Security Metrics',
          backgroundColor: 'rgba(0, 123, 255, 0.2)',
          borderColor: 'rgba(0, 123, 255, 1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(0, 123, 255, 0.4)',
          hoverBorderColor: 'rgba(0, 123, 255, 1)',
          data: [85, 70, 90, 80, 75],
        },
      ],
    };

    if (barChartRef.current) {
      barChartRef.current.destroy();
    }

    barChartRef.current = new Chart(barCtx, {
      type: 'bar',
      data: barData,
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

    
    const doughnutCtx = document.getElementById('doughnutChart').getContext('2d');
    const doughnutData = {
      labels: ['Confidentiality', 'Integrity', 'Availability'],
      datasets: [
        {
          data: [30, 50, 20],
          backgroundColor: ['red', 'blue', 'yellow'],
          hoverBackgroundColor: ['rgba(255,0,0,0.5)', 'rgba(0,0,255,0.5)', 'rgba(255,255,0,0.5)'],
        },
      ],
    };

    if (doughnutChartRef.current) {
      doughnutChartRef.current.destroy();
    }

    doughnutChartRef.current = new Chart(doughnutCtx, {
      type: 'doughnut',
      data: doughnutData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'right',
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

    // Line Chart
    const lineCtx = document.getElementById('lineChart').getContext('2d');
    const lineData = {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [
        {
          label: 'Monthly Data',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 2,
          fill: false,
          data: [65, 59, 80, 81, 56],
        },
      ],
    };

    if (lineChartRef.current) {
      lineChartRef.current.destroy();
    }

    lineChartRef.current = new Chart(lineCtx, {
      type: 'line',
      data: lineData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
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

    // Radar Chart
    const radarCtx = document.getElementById('radarChart').getContext('2d');
    const radarData = {
      labels: ['Confidentiality', 'Integrity', 'Availability', 'Authentication', 'Authorization'],
      datasets: [
        {
          label: 'Security Metrics',
          backgroundColor: 'rgba(0, 123, 255, 0.2)',
          borderColor: 'rgba(0, 123, 255, 1)',
          pointBackgroundColor: 'rgba(0, 123, 255, 1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(0, 123, 255, 1)',
          data: [75, 60, 85, 70, 80],
        },
      ],
    };

    if (radarChartRef.current) {
      radarChartRef.current.destroy();
    }

    radarChartRef.current = new Chart(radarCtx, {
      type: 'radar',
      data: radarData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            suggestedMin: 0,
            suggestedMax: 100,
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
  }, []);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
      <div style={{ boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)', borderRadius: '8px', overflow: 'hidden' }}>
        <canvas id="barChart" width="400" height="400"></canvas>
      </div>
      <div style={{ boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)', borderRadius: '8px', overflow: 'hidden' }}>
        <canvas id="doughnutChart" width="400" height="400"></canvas>
      </div>
      <div style={{ boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)', borderRadius: '8px', overflow: 'hidden' }}>
        <canvas id="lineChart" width="400" height="400"></canvas>
      </div>
      <div style={{ boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)', borderRadius: '8px', overflow: 'hidden' }}>
        <canvas id="radarChart" width="400" height="400"></canvas>
      </div>
    </div>
  );
};

export default SecurityChart;
