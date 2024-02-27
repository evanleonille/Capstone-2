const uploadForm = document.getElementById('uploadFileForm');
const fileInput = document.getElementById('fileInput');
const uploadProgress = document.getElementById('uploadProgress');
const uploadMessage = document.getElementById('uploadMessage');

uploadForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Validate file selection (add your own validation logic here)
  if (!fileInput.files.length) {
    uploadMessage.textContent = "Please select a file to upload.";
    return;
  }

  // Show upload progress indicator
  uploadProgress.style.display = 'block';

  // Simulate upload (replace with your actual upload logic)
  setTimeout(function() {
    const uploadSuccess = Math.random() < 0.5; // Simulate a 50% chance of success
    uploadProgress.style.display = 'none';
    if (uploadSuccess) {
      uploadMessage.textContent = "File uploaded successfully!";
      alert("File uploaded successfully!"); // Window alert for successful upload
      // Redirect to files page
      window.location.href = './Files.html';
    } else {
      uploadMessage.textContent = "Failed to upload file. Please try again.";
      alert("Failed to upload file. Please try again."); // Window alert for unsuccessful upload
    }
  }, 2000); // Simulate upload time
});
