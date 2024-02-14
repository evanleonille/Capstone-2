
    document.addEventListener('DOMContentLoaded', function () {
  var ctx = document.getElementById('bmiChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'pie',
    data: {
        labels: ['Underweight', 'Healthy Weight', 'Overweight', 'Obesity'],
    datasets: [{
        label: 'Orphan BMI Distribution',
    data: [5, 10, 3, 2], // Example counts
    backgroundColor: [
    'rgba(255, 99, 132, 0.5)',
    'rgba(54, 162, 235, 0.5)',
    'rgba(255, 206, 86, 0.5)',
    'rgba(75, 192, 192, 0.5)',
    ],
    borderColor: [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
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
    text: 'Orphan BMI Distribution'
        }
      }
    }
  });
});
