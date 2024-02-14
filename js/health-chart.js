document.addEventListener('DOMContentLoaded', function () {
  var ctx = document.getElementById('healthChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['Blood Pressure', 'Heart Rate', 'BMI',],
      datasets: [{
        label: 'Orphan Health Metrics',
        data: [120, 80, 25], // Example values
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Orphan Health Metrics'
        }
      },
      scale: {
        ticks: {
          beginAtZero: true,
          min: 0,
          max: 250 // Example maximum value
        }
      }
    }
  });
});
