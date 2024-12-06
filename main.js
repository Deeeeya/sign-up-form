const container = document.getElementById("inputContainer");
const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const emailInput = document.getElementById("email_input");
const passwordInput = document.getElementById("password_input");
const iconOne = document.querySelector(".iconFN");
const iconTwo = document.querySelector(".iconLN");
const iconThree = document.querySelector(".iconE");
const iconFour = document.querySelector(".iconP");

function empty() {
  if (
    firstName.value == "" ||
    lastName.value == "" ||
    emailInput.value == "" ||
    passwordInput.value == ""
  ) {
    return false;
  } else {
    return true;
  }
}

claimButton.addEventListener("click", function () {
  if (firstName.value == "") {
    empty();
    document.getElementById("errorFirstName").style.display = "inline";
    container.style.height = "570px";
    container.style.gap = "0.8em";
    firstName.style.border = "3px solid hsl(358, 74%, 73%)";
    firstName.style.outline = "none";
    iconOne.classList.add("active");
  } else {
    document.getElementById("errorFirstName").style.display = "none";
    firstName.style.border = "1px solid hsl(246, 25%, 77%)";
  }

  if (lastName.value == "") {
    empty();
    document.getElementById("errorLastName").style.display = "inline";
    container.style.height = "570px";
    container.style.gap = "0.8em";
    lastName.style.border = "3px solid hsl(358, 74%, 73%)";
    lastName.style.outline = "none";
    iconTwo.classList.add("active");
  } else {
    document.getElementById("errorLastName").style.display = "none";
    lastName.style.border = "1px solid hsl(246, 25%, 77%)";
  }

  if (emailInput.value == "") {
    empty();
    document.getElementById("errorEmail").style.display = "inline";
    container.style.height = "570px";
    container.style.gap = "0.8em";
    emailInput.style.border = "3px solid hsl(358, 74%, 73%)";
    emailInput.style.outline = "none";
    iconThree.classList.add("active");
  } else {
    document.getElementById("errorEmail").style.display = "none";
    emailInput.style.border = "1px solid hsl(246, 25%, 77%)";
  }

  if (passwordInput.value == "") {
    empty();
    document.getElementById("errorPassword").style.display = "inline";
    container.style.height = "570px";
    container.style.gap = "0.8em";
    passwordInput.style.border = "3px solid hsl(358, 74%, 73%)";
    passwordInput.style.outline = "none";
    iconFour.classList.add("active");
  } else {
    document.getElementById("errorPassword").style.display = "none";
    passwordInput.style.border = "1px solid hsl(246, 25%, 77%)";
  }
});
