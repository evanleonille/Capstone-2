document.addEventListener('DOMContentLoaded', function () {
  var ctx2 = document.getElementById('ageChart').getContext('2d');
  var overallChart = new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: ['0-5', '6-10', '11-15', '16-20', '21+'],
      datasets: [{
        label: 'Ages of Orphans',
        data: [20, 35, 50, 30, 15], // Example values
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: 'Ages of Orphans'
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