const bmiForm = document.getElementById('bmiForm');
bmiForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    const height = parseFloat(document.getElementById('heightInput').value);
    const weight = parseFloat(document.getElementById('weightInput').value);

    // Calculate BMI
    const bmi = weight / (height / 100) ** 2;

    // Display BMI (replace with your desired output method)
    console.log(`Your BMI is: ${bmi}`);
});
