document.addEventListener('DOMContentLoaded', function() {
    // Get the button that triggers the other modal
    var otherButton = document.querySelector('.btn-primary[data-bs-target="#personalInfoModal"]');

    // Add event listener for the other button click
    otherButton.addEventListener('click', function() {
      // Get the other modal, save button, and other necessary elements
      var modal = document.getElementById('personalInfoModal');
      var saveButton = modal.querySelector('.btn-primary');
      
      // Add event listener for the save button click
      saveButton.addEventListener('click', function() {
        // Perform any necessary saving logic here

        // Show notification
        alert('Your changes have been saved.');

        // Hide modal
        var modalInstance = bootstrap.Modal.getInstance(modal);
        modalInstance.hide();
      });
    });
  });