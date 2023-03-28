function validateForm() {
    // get the values of the email and password
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // [^\s@]+  characters
    if (!emailRegex.test(email)) {
      //emailRegex is a variable in JavaScript that stores a regular expression pattern used to validate email addresses. 
      //The pattern specifies a set of rules that the email address must follow in order to be considered valid.
      alert("Please enter a valid email address");
      return false;
    }

    // Password validation
    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return false;
    }

    // If both email and password are valid, submit the form
   
    return true;
  }