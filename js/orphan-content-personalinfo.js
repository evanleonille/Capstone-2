document.addEventListener('DOMContentLoaded', function () {
    // Get the modal and the save button
    var modal = document.getElementById('additionalInfoModal');
    var saveButton = modal.querySelector('.btn-primary');

    // Add event listener for the save button click
    saveButton.addEventListener('click', function () {
        // Perform any necessary saving logic here

        // Show notification
        alert('Your changes have been saved.');

        // Hide modal
        var modalInstance = bootstrap.Modal.getInstance(modal);
        modalInstance.hide();
    });
});