const pwd = document.querySelector("#pwd");
const confirmPassword = document.querySelector("#confirmPwd");

confirmPassword.addEventListener("input", e => {
    console.log("Pwd: " + pwd.value);
    console.log("Confirm Pwd: " + confirmPassword.value);
    console.log(pwd.value !== confirmPassword.value);
    if (pwd.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords don't match");
        confirmPassword.reportValidity();
        e.preventDefault();
    } else {
        confirmPassword.setCustomValidity("");
    }
})