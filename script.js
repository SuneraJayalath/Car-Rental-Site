// ==============================
// Navbar Toggle for Mobile
// ==============================
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// ==============================
// Login Form Validation
// ==============================
const loginForm = document.querySelector(".login-form");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent page reload

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
      alert("Please fill in both username and password.");
    } else {
      alert(`Logging in as: ${username}`);
    }
  });
}

// ==============================
// Booking Form Validation
// ==============================
const bookingForm = document.querySelector(".booking-form");

if (bookingForm) {
  bookingForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const car = document.getElementById("car").value;
    const date = document.getElementById("date").value;
    const duration = document.getElementById("duration").value;

    if (!car || !date || !duration || duration <= 0) {
      alert("Please fill in all booking details correctly.");
    } else {
      alert(`Car booked: ${car}\nDate: ${date}\nDuration: ${duration} day(s)`);
    }
  });
}



// validation contact form
//
//
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form elements
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  // Get error fields
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");

  // Reset errors
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";

  let isValid = true;

  // Name validation
  if (name.value.trim() === "") {
    nameError.textContent = "Name is required.";
    isValid = false;
  }

  // Email validation
  if (email.value.trim() === "") {
    emailError.textContent = "Email is required.";
    isValid = false;
  } else if (!/^\S+@\S+\.\S+$/.test(email.value.trim())) {
    emailError.textContent = "Invalid email format.";
    isValid = false;
  }

  // Message validation
  if (message.value.trim() === "") {
    messageError.textContent = "Message is required.";
    isValid = false;
  }

  if (isValid) {
    alert("Message sent successfully!");
    // Optionally clear form:
    this.reset();
  }
});


  // Scroll to top functionality
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  // Show button after scrolling down
  window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  };

  // Scroll to top when clicked
  scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });



  //book butn
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Stop form from submitting normally

    // Get form values
    const fullname = document.getElementById("fullname").value.trim();
    const car = document.getElementById("car").value;
    const date = document.getElementById("date").value;
    const days = document.getElementById("days").value;

    // Clear previous errors
    document.getElementById("nameError").textContent = "";
    document.getElementById("carError").textContent = "";
    document.getElementById("dateError").textContent = "";
    document.getElementById("daysError").textContent = "";

    let isValid = true;

    // Validate fields
    if (fullname === "") {
      document.getElementById("nameError").textContent = "Full name is required.";
      isValid = false;
    }
    if (car === "") {
      document.getElementById("carError").textContent = "Please select a car.";
      isValid = false;
    }
    if (date === "") {
      document.getElementById("dateError").textContent = "Booking date is required.";
      isValid = false;
    }
    if (days === "" || parseInt(days) < 1) {
      document.getElementById("daysError").textContent = "Enter a valid number of days.";
      isValid = false;
    }

    // If all fields are valid, show success message
    if (isValid) {
      alert("✅ Car successfully booked!\nThank you, " + fullname + ".");
      form.reset(); // Clear form
    }
  });
});


