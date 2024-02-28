document.addEventListener('DOMContentLoaded', function () {
    // Get all elements that toggle modals
    var modalToggleButtons = document.querySelectorAll('[data-bs-toggle="modal"]');

    // Add event listener to each toggle button
    modalToggleButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Get the target modal
            var targetModalSelector = button.getAttribute('data-bs-target');
            var modal = document.querySelector(targetModalSelector);

            // Get the save button inside the modal
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
    });
});