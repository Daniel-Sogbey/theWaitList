let container = document.querySelector(".container");
let popup = document.querySelector("#popup");
let btn = document.querySelector(".btn");
let close = document.querySelector(".close");
let form = document.querySelector("#myForm");
let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");

popup.style.display = "none";

btn.addEventListener("click", function(event) {
  event.preventDefault();

  // Checking validity of name and email fields
  if (nameInput.value.trim() === "") {
    alert("Please enter your name.");
    return;
  }
  if (emailInput.value.trim() === "") {
    alert("Please enter your email address.");
    return;
  }

  // Checking validity of email format using a regular expression
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Log user input to the console
  console.log("Name:", nameInput.value);
  console.log("Email:", emailInput.value);

  //Storing the user input in a userData array.
  var userData = {
    name: nameInput.value,
    email: emailInput.value
  };

  // Showing the pop-up message
  container.classList.toggle("active");
  popup.style.display = "block";

});

form.addEventListener("submit", function(event) {
  event.preventDefault();
});

close.addEventListener("click", function() {
  popup.style.display = "none";
  container.classList.remove("active");
});


