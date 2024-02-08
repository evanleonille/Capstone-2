 // Example JavaScript to populate data and create graph
 const totalOrphansCount = document.getElementById('totalOrphansCount');
 // Replace with your logic to fetch actual data
 totalOrphansCount.innerText = 350; // Placeholder value

 const maleCount = document.getElementById('maleCount');
 const femaleCount = document.getElementById('femaleCount');
 // Replace with your logic to fetch actual data
 maleCount.innerText = 180; // Placeholder value
 femaleCount.innerText = 170; // Placeholder value

 const ctx = document.getElementById('orphanStatusGraph').getContext('2d');
 const orphanStatusGraph = new Chart(ctx, {
   type: 'bar',
   data: {
     labels: ['Outstanding', 'Best', 'Better'],
     datasets: [{
       label: 'Number of Orphans',
       data: [25, 120, 105],
       backgroundColor: ['red', 'green', 'orange'],
       borderColor: ['red', 'green', 'orange'],
     }],
   },
 });

 // Add click event listeners to cards
 const cards = document.querySelectorAll('.clickable');
 cards.forEach(card => {
   card.addEventListener('click', () => {
     const targetModal = document.getElementById(card.dataset.target);
     targetModal.show();
   });
 });