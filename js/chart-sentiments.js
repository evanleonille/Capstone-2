document.addEventListener('DOMContentLoaded', function () {
    // New Pie Chart
    var ctx2 = document.getElementById('newPieChart').getContext('2d');
    var newPieChart = new Chart(ctx2, {
        type: 'pie',
        data: {
            labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4'],
            datasets: [{
                label: 'New Pie Chart',
                data: [10, 20, 30, 40], // Example counts
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
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'New Pie Chart',
                    fontSize: 28,
                }
            }
        }
    });
});
 