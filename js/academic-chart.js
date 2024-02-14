document.addEventListener('DOMContentLoaded', function () {
  var ctx = document.getElementById('academicChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Outstanding', 'Satisfactory', 'Needs Improvement', 'Unsatisfactory'],
      datasets: [{
        label: 'Orphan Academic Performance',
        data: [15, 30, 10, 5], // Example counts
        backgroundColor: [
          'rgba(75, 192, 192, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(255, 99, 132, 0.5)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1
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
          text: 'Orphan Academic Performance'
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
});