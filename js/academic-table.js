    // Function to add a new row to the academic details table
    function addAcademicDetailRow(date, yearLevel, gradingPeriod, subject, grades, status) {
        var tableBody = document.getElementById("academicDetailsTable").getElementsByTagName("tbody")[0];
        var newRow = tableBody.insertRow();

        var dateCell = newRow.insertCell(0);
        var yearLevelCell = newRow.insertCell(1);
        var gradingPeriodCell = newRow.insertCell(2);
        var subjectCell = newRow.insertCell(3);
        var gradesCell = newRow.insertCell(4);
        var statusCell = newRow.insertCell(5);

        dateCell.textContent = date;
        yearLevelCell.textContent = yearLevel;
        gradingPeriodCell.textContent = gradingPeriod;
        subjectCell.textContent = subject;
        gradesCell.textContent = grades;
        statusCell.textContent = status;
    }

    // Example usage:
    addAcademicDetailRow("2024-02-13", "Freshman", "Semester 1", "Mathematics", "85 (Midterm), 92 (Final Exam)", "Passed");
    addAcademicDetailRow("2023-12-15", "Sophomore", "Semester 2", "History", "90 (Quizzes), 78 (Essay), 82 (Final Project)", "Passed");