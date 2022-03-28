const loginButton = document.getElementById("btn_login");
const idBox = document.getElementById("employee_id");
const passBox = document.getElementById("password");
console.log("I can see login.js");

// Login script, only bound on login.html

loginButton.addEventListener("click", async (e) => {
    e.preventDefault();
    console.log("Login Button got clicked")
    const employee_id = idBox.value;
    const password = passBox.value;

    if (employee_id && password) {
        const response = await fetch('/login', {
            method: 'POST',
            body: JSON.stringify({ employee_id, password }),
            headers: { 'Content-Type': 'application/json' },
          });
      
          if (response.ok) {
            document.location.replace('/customers.html');
          } else {
            alert('Failed to log in.');
          }
    } else {
        console.log("Something went wrong with the event!")
        loginErrorMsg.style.opacity = 1;
    }
}) 