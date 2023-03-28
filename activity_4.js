function passwordCheck() {

    const password = document.getElementById("password").value;
    const password2 = document.getElementById("password2").value;

    if (password == password2) {
        return true;
    }
    else {
        alert("Passwords must match");
        return false;
    }
}