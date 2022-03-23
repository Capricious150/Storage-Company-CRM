const customer_button = document.getElementById('customer-button');
const customerList = documemnt.querySelector('ul');
//all customers
function getCustomers() {
    fetch('../models/customers')
        .then( response => {
           return response.json(); 
    })
 
    .then((data) => {
        for (var i = 0; i < data.length; i++)
        var listItem = document.createElement('li');
        listItem.textContent = data[i].html_url;
        repoList.appendChild(listItem);
      }
    });
}

ul.appendChild(list);
   
};
 //all customer info, recent and past issues
function getCustomerById() {

}

//all employees
function getEmployee(){
    fetch('../models/employees')
    .then (response => {

    })
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
