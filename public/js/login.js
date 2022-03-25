const loginButton = document.getElementById("btn_login");
const idBox = document.getElementById("employee_id");
const passBox = document.getElementById("password");
console.log("I can see login.js");

// const loginFormHandler = async (event) => {
//     event.preventDefault();
  
//     const employee_id = document.querySelector('employee_id').value.trim();
//     const password = document.querySelector('password').value.trim();
  
//     if (employee_id && password) {
//       const response = await fetch('/customer', {
//         method: 'POST',
//         body: JSON.stringify({ employee_id, password }),
//         headers: { 'Content-Type': 'application/json' },
//       });
  
//       if (response.ok) {
//         document.location.replace('/customer');
//       } else {
//         alert('Failed to log in.');
//       }
//     }
//   };
  
//   document
//     .querySelector('.container')
//     .addEventListener('submit', loginFormHandler);
  



loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Login Button got clicked")
    const employee_id = idBox.value;
    const password = passBox.value;

    if (employee_id && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ employee_id, password }),
            headers: { 'Content-Type': 'application/json' },
          });
      
          if (response.ok) {
            document.location.replace('/customers.html');
          } else {
            alert('Failed to log in.');
          }
        
        alert("You have successfully logged in.");
    } else {
        console.log("Something went wrong with the event!")
        loginErrorMsg.style.opacity = 1;
    }
}) 