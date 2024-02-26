document.addEventListener("DOMContentLoaded", function() {
    var currentTab = 0;
    showTab(currentTab);

    document.getElementById("nextBtn").addEventListener("click", function() {
      if (validateForm()) {
        if (currentTab === 2) {
          submitForm();
        } else {
          currentTab++;
          showTab(currentTab);
        }
      }
    });

    document.getElementById("prevBtn").addEventListener("click", function() {
      currentTab--;
      showTab(currentTab);
    });

    function showTab(n) {
      var pages = document.getElementsByClassName("page");
      for (var i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
      }
      pages[n].style.display = "block";

      if (n === 0) {
        document.getElementById("prevBtn").style.display = "none";
      } else {
        document.getElementById("prevBtn").style.display = "inline";
      }

      if (n === (pages.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Submit";
      } else {
        document.getElementById("nextBtn").innerHTML = "Next";
      }
    }

    function validateForm() {
      var currentPage = document.getElementsByClassName("page")[currentTab];
      var inputs = currentPage.getElementsByTagName("input");
      var valid = true;

      for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].hasAttribute("required") && inputs[i].value === "") {
          valid = false;
          break;
        }
      }

      if (!valid) {
        alert("Please fill in all required fields.");
      }

      return valid;
    }

    function submitForm() {
      // Here you can perform form submission
      // For demonstration purposes, we'll simply display a success message
      alert("Form submitted successfully!");
      // You can also close the modal or redirect the user after submission
      // For example:
      // document.getElementById("multiPageModal").modal("hide"); // Close modal
      // window.location.href = "success.html"; // Redirect to success page
    }
  });