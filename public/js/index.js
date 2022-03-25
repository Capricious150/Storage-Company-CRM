const doughnut = require("chart.js");
const viewCustButton = document.getElementById('viewCustomersButton');
//all customers

const getCustomers = async () => {
    const response = await fetch('/customer/', {
        method: 'GET'
    })
    console.log(response);
    if (response.ok) {
        // document.location.replace('/customer/');
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

const data = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: '',
      data: [],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };
const config = {
    type: 'doughnut',
    data: data,
  };

    data = {
    datasets: [{
        data: [10, 20, 30]
    }],
}