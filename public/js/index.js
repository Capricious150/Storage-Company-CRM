
// const customerList = document.querySelector('ul');
// const employeeList = document.querySelector('ul');
const viewCustButton = document.getElementById('viewCustomersButton');
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

function getCustomerById() {
    fetch('../models/employee')
        .then( response => {
           return response.json(); 
    })
    .then((data) => {
})};

//all employees
function getEmployee(){
    fetch('../models/employee')
        .then( response => {
           return response.json(); 
    })
    .then((data) => {
        for (var i = 0; i < data.length; i++)
        var listItem = document.createElement('li');
        listItem.textContent = data[i];
        employeeList.appendChild(listItem);
    });
}

viewCustButton.addEventListener('click', getCustomers);

// indivual employees
// function getEmployeeById() {

// }
// function getUnits() {

// }

