var email = document.getElementById("email")
    , confirm_email = document.getElementById("confirm_email");

function validatePassword() {
    if (email.value != confirm_email.value) {
        confirm_email.setCustomValidity("Die eingegebenen E-Mails sind nicht idetisch");
    } else {
        confirm_email.setCustomValidity('');
    }
}

email.onchange = validatePassword;
confirm_email.onkeyup = validatePassword;