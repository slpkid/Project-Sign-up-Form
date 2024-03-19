let password = document.getElementById("password-enter");
let passwordConfirm = document.getElementById("password-confirm");

password.addEventListener("keydown", (e) => {validatePassword()});
passwordConfirm.addEventListener("keydown", (e) => {validatePassword()});

function validatePassword() {
    if (password.value !== passwordConfirm.value) {
        password.setCustomValidity("Invalid field.");
        passwordConfirm.setCustomValidity("Invalid field.");
        return
    } else {
    password.setCustomValidity("");
    password.setCustomValidity("");
    return;
    }
};
