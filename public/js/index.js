const customer_button = document.getElementById('customer-button');
const ul = document.getElementById('customers');
//list of customers
function getCustomers() {
    const customerURL = "http://localhost:3001/customers"
    fetch(customerURL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let customers = data;

      customers.map(function(customer) {
        let li = document.createElement('li');

        li.appendChild(customer);
        list.appendChild(li);
      });
    })
    };

  ul.appendChild(list);
   
}

function getEmployee

customer_button.addEventListener("click", getCustomers);

