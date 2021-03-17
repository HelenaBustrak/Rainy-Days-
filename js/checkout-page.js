const form = document.querySelector(".messageform");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const phoneNumber = document.querySelector("#phone");
const phoneError = document.querySelector("#phoneError");
const firstName = document.querySelector("#fname");
const firstNameError = document.querySelector("#fnameError");
const lastName = document.querySelector("#lname");
const lastNameError = document.querySelector("#lnameError");
const adress = document.querySelector("#adress");
const adressError = document.querySelector("#adressError");
const city = document.querySelector("#city");
const cityError = document.querySelector("#cityError");
const country = document.querySelector("#adress");
const countryError = document.querySelector("#countryError");
const shippingMethod = document.querySelector("#shippingMethod");
const shippingMethodError = document.querySelector("#shippingError");
const button = document.querySelector(".formButton");
const successMessage = document.querySelector(".successMessage");



function validateForm(event) {
    event.preventDefault();

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (checkLength(phoneNumber.value, 8) === true) {
        phoneError.style.display = "none";
    } else {
        phoneError.style.display = "block";
    }

    if(checkLength(firstName.value, 2) === true) {
        firstNameError.style.display = "none";
    }
    else {
        firstNameError.style.display = "block";
    }

    if(checkLength(lastName.value, 3) === true) {
        lastNameError.style.display = "none";
    }
    else {
        lastNameError.style.display = "block";
    }

    if(checkLength(lastName.value, 3) === true) {
        lastNameError.style.display = "none";
    }
    else {
        lastNameError.style.display = "block";
    }

    if(checkLength(adress.value, 6) === true) {
        adressError.style.display = "none";
    }
    else {
        adressError.style.display = "block";
    }

    if(checkLength(city.value, 3) === true) {
        cityError.style.display = "none";
    }
    else {
        cityError.style.display = "block";
    }

    if(checkLength(country.value, 4) === true) {
        countryError.style.display = "none";
    }
    else {
        countryError.style.display = "block";
    }

    if(shippingMethod === true) {
        countryError.style.display = "none";
    }
    else {
        countryError.style.display = "block";
    }

    successMessage.innerHTML = "Your message has been sent!";

    form.reset();

}

email.addEventListener("keyup", checkButton);
phoneNumber.addEventListener("keyup", checkButton);
firstName.addEventListener("keyup", checkButton);
lastName.addEventListener("keyup", checkButton);
adress.addEventListener("keyup", checkButton);
city.addEventListener("keyup", checkButton);
country.addEventListener("keyup", checkButton);

function checkButton() {
    if (validateEmail(email.value) && checkLength(phoneNumber.value, 8) && checkLength(firstName.value, 2)&& checkLength(lastName.value, 3)&& checkLength(adress.value, 6)&& checkLength(city.value, 3)&& checkLength(country.value, 3)) {
        button.disabled = false;
    } else {
        successMessage.innerHTML = "";
        button.disabled = true;
    }
}

form.addEventListener("submit", validateForm);

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}


function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}