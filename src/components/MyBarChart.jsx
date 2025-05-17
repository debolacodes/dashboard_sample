// BarChart.js
import React from 'react';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);




export default function MyBarChart ({title, data}){
  

  const chartData = {
    labels: data.map(item => item.day),
    datasets: [
      {
        label: 'Male',
        data: data.map(item => item.male),
        backgroundColor: '#7059A4',
        barThickness: 12,
        borderRadius: 12,
      },
      {
        label: 'Female',
        data: data.map(item => item.female),
        backgroundColor: '#EEB257',
        barThickness: 12,
        borderRadius: 12,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { mode: 'index', intersect: false },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { display: true },
      },
      y: {
        grid: { display: true,  },
        ticks: { display: false },
        title: { display: false },
      },
    },
  };


  return (
    <div className="w-full h-[300px] mt-[30px] pb-[50px]">
      <div className='font-medium text-xl mb-[20px]'>{title}</div>
      <Bar data={chartData} options={options} />
    </div>
  );
};

