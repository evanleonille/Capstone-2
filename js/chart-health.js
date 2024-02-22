    // Replace with your actual health data and categories
    var chartData = {
      labels: ['Exercise', 'Healthy Eating', 'Sleep', 'Stress Management', 'Others'],
      datasets: [{
        data: [30, 25, 20, 15, 10],
        backgroundColor: ['#2ecc71', '#1abc9c', '#3498db', '#f1c40f', '#e74c3c'],
        hoverBackgroundColor: ['#27ae60', '#16a085', '#2980b9', '#f39c12', '#c0392b']
      }]
    };

    // Create the chart
    var ctx = document.getElementById('health-chart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'pie',
      data: chartData,
      options: {
        responsive: true,
        legend: {
          display: true,
          position: 'left'
        }
      }
    });