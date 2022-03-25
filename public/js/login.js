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
  

const loginButton = document.getElementById("btn_login");


loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const employee_id = loginForm.employee_id.value;
    const password = loginForm.password.value;

    if (employee_id === "" && password === "true") {
        alert("You have successfully logged in.");
        location.replace('/customer');
    } else {
        loginErrorMsg.style.opacity = 1;
    }
}) 