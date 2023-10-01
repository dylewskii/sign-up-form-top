const firstName = document.getElementsByClassName("first_name");
const lastName = document.getElementsByClassName("last_name");
const emailAddress = document.getElementsByClassName("email_address");
const phoneNumber = document.getElementsByClassName("tel_number");
const password = document.getElementsByClassName("password");
const passwordConfirmation = document.getElementsByClassName("password_confirmation");


let validate = function () {
    if (password.value === "" || password.value == null) {
        alert("Password can't be empty!")
    }
}