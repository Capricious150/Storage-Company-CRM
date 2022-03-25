const doughnut = require("chart.js");
const viewCustButton = document.getElementById('viewCustomersButton');
const viewUnitsButton = document.getElementById('viewUnitsButton');


//all customers

const getCustomers = async () => {
    const response = await fetch('/customer/', {
        method: 'GET'
    })
    console.log(response);
    if (response.ok) {
        document.location.replace('/customer/');
      } else {
        alert('Failed.');
      }
    }

// function getCustomerById() {
//     fetch('../models/employee')
//         .then( response => {
//            return response.json(); 
//     })
//     .then((data) => {
// })};

//all employees
const getEmployee = async () => {
    const response = await fetch('/employees/', {
        method: 'GET'
    })
    console.log(response);
    if (response.ok) {
        // document.location.replace('/employees/');
      } else {
        alert('Failed.');
      }
    }

viewCustButton.addEventListener('click', getCustomers);
viewUnitsButton.addEventListener('click', getUnits);

const getUnits = async () => {
    const response = await fetch('/storage', {
        method: 'GET'
    })
    console.log(response);
    if (response.ok) {
        document.location.replace('/storage');
      } else {
        alert('Failed.');
      }
    }
