let email = document.getElementById("email").value;
let password = document.getElementById("password").value;
let output = document.getElementById("loginOutput");
function login() {
    if (email === "" || password === "") {
        output.innerHTML = "Please fill in all fields.";
    }
//look into the backend database to see if the email and password match (if not say the email or password is incorrect or have to make a new account)
    else {
        if (email === "admin@example.com" && password === "admin123") {
            output.innerHTML = "Login successful!";
        } else {
            output.innerHTML = "Invalid email or password.";
        }
    }
}