const customer_button = document.getElementById('customer-button');
const customerList = documemnt.querySelector('ul');
const employeeList = document.querySelector('ul');
//all customers
function getCustomers() {
    fetch('http://localhost:3001/customers')
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
 //??is manager entering cust id or clicking link
function getCustomerById() {
    fetch('../models/employee')
        .then( response => {
           return response.json(); 
    })
    .then((data) => {
};

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
function getUnits() {

}

//
// function getOpenIssues(){

// }

// function getClosedIssues(){

// }