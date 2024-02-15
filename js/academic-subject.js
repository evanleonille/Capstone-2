function addSubjectField() {
    var subjectFieldsDiv = document.getElementById("subjectFields");
    
    var subjectDiv = document.createElement("div");
    subjectDiv.className = "mb-3 col-6";

    var subjectLabel = document.createElement("label");
    subjectLabel.className = "form-label";
    subjectLabel.textContent = "Subject";

    var subjectInput = document.createElement("input");
    subjectInput.type = "text";
    subjectInput.className = "form-control mb-3 subject-input";
    subjectInput.placeholder = "Subject";
    subjectInput.required = true;

    subjectDiv.appendChild(subjectLabel);
    subjectDiv.appendChild(subjectInput);
    subjectFieldsDiv.appendChild(subjectDiv);

    var gradeDiv = document.createElement("div");
    gradeDiv.className = "mb-3 col-6";

    var gradeLabel = document.createElement("label");
    gradeLabel.className = "form-label";
    gradeLabel.textContent = "Grade";

    var gradeInput = document.createElement("input");
    gradeInput.type = "text";
    gradeInput.className = "form-control mb-3 grade-input";
    gradeInput.placeholder = "Grade";
    gradeInput.required = true;

    gradeDiv.appendChild(gradeLabel);
    gradeDiv.appendChild(gradeInput);
    subjectFieldsDiv.appendChild(gradeDiv);
}