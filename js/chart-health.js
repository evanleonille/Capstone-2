// Health data
var healthData = {
  labels: ['Exercise', 'Healthy Eating', 'Sleep', 'Stress Management', 'Others'],
  datasets: [{
    label: 'Hours per week',
    data: [5, 7, 8, 6, 4],
    backgroundColor: ['#2ecc71', '#1abc9c', '#3498db', '#f1c40f', '#e74c3c'],
    borderWidth: 1
  }]
};

// Create the chart
var ctx = document.getElementById('health-chart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: healthData,
  options: {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Hours',
          font: {
            size: 16
          }
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  }
});