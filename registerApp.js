//
function reg() {
      let fullName = document.getElementById("fullName").value;
      let fullEmail = document.getElementById("fullEmail").value;
      let passWord = document.getElementById("passWord").value;
      let confirmPassWord = document.getElementById("confirmPassWord").value;
      let output = document.getElementById("output");

      if (fullName === "" || fullEmail === "" || passWord === "" || confirmPassWord === "") {
        output.innerHTML = "<p class='msg error'>All fields are required.</p>";
        return;
      }

      if (passWord.length < 8) {
        output.innerHTML = "<p class='msg error'>Password must be at least 8 characters long.</p>";
        return;
      }

      if (passWord !== confirmPassWord) {
        output.innerHTML = "<p class='msg error'>Passwords do not match.</p>";
        return;
      }

      output.innerHTML = "<p class='msg success'>Registration successful!</p>";
      window.location.href = "businessHomepage.html";
    }