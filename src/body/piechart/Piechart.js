import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);

class PieChart extends Component {
  render() {
    const data = {
      labels: ['Category 1', 'Category 2', 'Category 3'],
      datasets: [
        {
          data: [300, 450, 200],
          backgroundColor: ['#ff6384', '#36a2eb', '#ffce56'],
        },
      ],
    };

    return (
      <div>
        <Pie data={data} />
      </div>
    );
  }
}

export default PieChart;