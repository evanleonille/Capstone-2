document.addEventListener('DOMContentLoaded', function () {
    var ctx = document.getElementById('overallChart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'horizontalBar',
      data: {
        labels: ['Number of Orphans', 'Average Age', 'Average BMI', 'Average Health Score'],
        datasets: [{
          label: 'Orphanage Overview',
          data: [100, 12, 23, 75], // Example values
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
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
            text: 'Orphanage Overall Details'
          }
        },
        scales: {
          x: {
            ticks: {
              beginAtZero: true
            }
          }
        }
      }
    });
  });