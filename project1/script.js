// Retreiving HTML elements from the DOM
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// function to update a class and message for errors
function showError(input, message) {
  // Get the parent element of the input field (.form-control)
  const formControl = input.parentElement;
  // Replace the class - add error
  formControl.className = "form-control error";
  // Get the small element for the error message
  const small = formControl.querySelector("small");
  // Replace the text for small element using the input message
  small.innerText = message;
}

// function to update class for success
function showSuccesss() {
  // Get the parent element of the input field (.form-control)
  const formControl = input.parentElement;
  // Replace the class - add success
  formControl.className = "form-control success";
}

// Event Listeners
// Create eventlistner for submit button
form.addEventListener("submit", function (e) {
  // Stop page from reloading on submit
  e.preventDefault();

  // check to see if fields meet required field requirement
  // Check if username input is empty
  if (username.value === "") {
    showError(username, "Username is required");
  } else {
    showSuccesss(username);
  }

  // Check if email input is empty
  if (email.value === "") {
    showError(email, "Email is required");
  } else {
    showSuccesss(email);
  }

  // Check if password input is empty
  if (password.value === "") {
    showError(password, "Password is required");
  } else {
    showSuccesss(password);
  }

  // Check if password input is empty
  if (password2.value === "") {
    showError(password2, "Confirm Password is required");
  } else {
    showSuccesss(password2);
  }
});
