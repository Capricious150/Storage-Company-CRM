const customer_button = document.getElementById('customer-button');
const customerList = documemnt.querySelector('ul');
const employeeList = document.querySelector('ul');
//all customers
function getCustomers() {
    fetch('../models/customers')
        .then( response => {
           return response.json(); 
    })
    .then((data) => {
        for (var i = 0; i < data.length; i++)
        var listItem = document.createElement('li');
        listItem.textContent = data[i];
        customerList.appendChild(listItem);
    });
}
 //all customer info, recent and past issues
function getCustomerById() {
    fetch('../')
}

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

//indivual employees
function getEmployeeById() {

}

//
function getOpenIssues(){

}

function getClosedIssues(){

}


function getUnits() {

}
