// bmi.js

function calculateBMI() {
    // Get the input values
    var height = parseFloat(document.getElementById("heightInput").value);
    var weight = parseFloat(document.getElementById("weightInput").value);

    // Check if height and weight are valid numbers
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert("Please enter valid height and weight values.");
        return;
    }

    // Calculate BMI
    var bmi = weight / ((height / 100) * (height / 100));

    // Round BMI to two decimal places
    bmi = bmi.toFixed(2);

    // Determine status based on BMI value
    var status;
    if (bmi < 18.5) {
        status = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        status = "Normal";
    } else if (bmi >= 25 && bmi < 30) {
        status = "Overweight";
    } else {
        status = "Obese";
    }

    // Display status in window alert
    alert("Your BMI is: " + bmi + "\nYour BMI status is: " + status);

    // Redirect to BMI page
    window.location.href = "bmi.html";
}
