function validateForm() {
    let isValid = true;


    document.getElementById("fname-error").textContent = "";
    document.getElementById("lname-error").textContent = "";
    document.getElementById("mobnum-error").textContent = "";
    document.getElementById("pass-error").textContent = "";
    document.getElementById("birthdate-error").textContent = "";
    document.getElementById("gender-error").textContent = "";


    const fname = document.getElementById("fname").value.trim();
    const lname = document.getElementById("lname").value.trim();
    if (fname.length < 5) {
        document.getElementById("fname-error").textContent = "First name must be 5 characters or higher.";
        isValid = false;
    }
    if (lname.length < 5) {
        document.getElementById("lname-error").textContent = "Last name must be 5 characters or higher.";
        isValid = false;
    }


    const mobnum = document.getElementById("mobnum").value.trim();
    const mobnumRegex = /^09\d{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!mobnumRegex.test(mobnum) && !emailRegex.test(mobnum)) {
        document.getElementById("mobnum-error").textContent = "Mobile number must start with 09 and be 11 characters long or follow email format.";
        isValid = false;
    }

    const pass = document.getElementById("pass").value.trim();
    if (pass.length < 12) {
        document.getElementById("pass-error").textContent = "Password must be 12 characters or higher.";
        isValid = false;
    }


    const birthdate = document.getElementById("birthdate").value;
    const birthYear = new Date(birthdate).getFullYear();
    if (birthYear > 2008 || birthYear <= 1960) {
        document.getElementById("birthdate-error").textContent = "Birth year must be 2008 or below until 1960";
        isValid = false;
    }


    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        document.getElementById("gender-error").textContent = "Please select your gender.";
        isValid = false;
    }

    return isValid;
}

document.getElementById("show-password").addEventListener("change", function() {
    const passwordField = document.getElementById("pass");
    if (this.checked) {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
});