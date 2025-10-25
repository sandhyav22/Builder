  // Mobile menu toggle
  const menuIcon = document.getElementById('menu-icon');
  const navLinks = document.getElementById('nav-links');

  menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });




  document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Clear previous errors
  document.querySelectorAll(".error").forEach(el => el.textContent = "");

  let isValid = true;

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Name validation
  if (name === "") {
    document.getElementById("nameError").textContent = "Full name is required.";
    isValid = false;
  }

  // Phone validation
  const phonePattern = /^[0-9]{10}$/;
  if (!phonePattern.test(phone)) {
    document.getElementById("phoneError").textContent = "Enter a valid 10-digit phone number.";
    isValid = false;
  }

  // Email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email address.";
    isValid = false;
  }

  // Message validation
  if (message === "") {
    document.getElementById("messageError").textContent = "Message cannot be empty.";
    isValid = false;
  }

  // If valid, submit or show success
  if (isValid) {
    alert("Form submitted successfully!");
    e.target.reset();
  }
});

function openForm() {
      document.getElementById("applicationForm").style.display = "flex";
    }

    function closeForm() {
      document.getElementById("applicationForm").style.display = "none";
    }

    // Handle Form Submission
    document.getElementById("applyForm").addEventListener("submit", function(event) {
      event.preventDefault(); // prevent actual form submission
      closeForm(); // close modal
      document.getElementById("successMsg").style.display = "block"; // show success message
      document.getElementById("jobCard").style.display = "none"; // hide card (optional)

      // Hide message after 3 seconds
      setTimeout(() => {
        document.getElementById("successMsg").style.display = "none";
        document.getElementById("jobCard").style.display = "block";
      }, 3000);
    });

    // Close modal when clicking outside
    window.onclick = function(event) {
      const modal = document.getElementById("applicationForm");
      if (event.target === modal) {
        closeForm();
      }
    };