const viewCustButton = document.getElementById("viewCustomersButton");
const assignUnitsButton = document.getElementById("assignUnitsButton");
const logoutButton = document.getElementById("logoutButton");

// Simple GET for ALL Customers.
// Customers by ID is handled via anchor tags in customers.handlebars and customersbyid.handlebars
const getCustomers = async () => {
  const response = await fetch("/customer/", {
    method: "GET",
  });
  console.log(response);
  if (response.ok) {
    document.location.replace("/customer/");
  } else {
    alert("Failed.");
  }
};

// Simple GET for All Storage Units
async function getUnits() {
  console.log("fetch initiated");
  const response = await fetch("/storage/", {
    method: "GET",
  });
  console.log(response);
  if (response.ok) {
    document.location.replace("/storage/");
  } else {
    alert("Failed.");
  }
}

// Simple GET for Storage Units by ID
async function getUnitById(id) { 
  return await fetch(`/storage/${id}`)
    .then((response) => {
      console.log(response)
      return response.json();
    })
    .then((data) => {
      console.log(data)
    });
}


// script for adding new customer via modal
const addNewEmployeeHandler = async (event) => {
  event.preventDefault();
  console.log("Add New Customer Function Started")
  
  let first_name = $('#custFirstName').val();
  let last_name = $('#custLastName').val();
  let current_balance = $('#custCurntBln').val();
  let insurance_type = $('#custInsType').val();
  let customer_since = $('#custSince').val();
  let units_owned = $('#custUntsOwnd').val();
  let current_customer = $('#custCurnt').val();
  let good_standing = $('#custStndng').val();
  let insured = $('#custInsrd').val();

  console.log(insured);
  console.log(first_name);
  
  const response = await fetch('/customer', {
      method: 'POST',
      body: JSON.stringify({
          'first_name': first_name,
          'last_name': last_name,
          'current_balance': current_balance,
          'insurance_type': insurance_type,
          'customer_since': customer_since,
          'units_owned': units_owned,
          'current_customer': current_customer,
          'good_standing': good_standing,
          'insured': insured,
      }),
      headers: {
          'Content-Type': 'application/json',
      },
  })
  
  if (response.ok) {
    document.location.replace("/customer/");
  } else {
    alert("Failed.");
  }
console.log(first_name)
}



//all employees
// NOT CURRENTLY IMPLEMENTED

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

// POST for Logout. SHOULD redirect to login.html using the redirect logic found in
// the various routes
const logOut = async () => {
  const response = await fetch ('/logout/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  })

  if(response.ok){
    document.location.replace("/");
  }
}

// Simple function for revealing the Add Customers modal
const showModal = () => {
  $("#addcustModal").modal("show");
}

// Conditional Event Listeners from prior to implemented JQuery
if (viewCustButton) {
  viewCustButton.addEventListener("click", getCustomers);
}

if (assignUnitsButton) {
  assignUnitsButton.addEventListener("click", getUnits);
}

if (logoutButton) {
  logoutButton.addEventListener("click", logOut)
}

$('#addcustBtn').on('click', addNewEmployeeHandler);
$("#modalBtn").on("click", showModal);
