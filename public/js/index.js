const viewCustButton = document.getElementById("viewCustomersButton");
const assignUnitsButton = document.getElementById("assignUnitsButton");

// const myChart = new doughnut.Chart(
//   document.getElementById('myChart'),
//   config
// );
// all customers

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
function addNewEmployeeHandler(event) {
  event.preventDefault();
  
  let first_name = $('#custFirstName').val();
  let last_name = $('#custLastName').val();
  let current_balance = $('#custCurntBln').val();
  let insurance_type = $('#custInsType').val();
  let customer_since = $('#custSince').val();
  let units_owned = $('#custUntsOwnd').val();
  let current_customer = $('#custCurnt').val();
  let good_standing = $('#custStndng').val();
  let insured = $('#custInsrd').val();
  console.log(first_name)
  
  fetch('/customer', {
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
  });


console.log(first_name)
}

$('#addEmployeeBtn').on('submit', addNewEmployeeHandler);








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

if (viewCustButton) {
  viewCustButton.addEventListener("click", getCustomers);
}

if (assignUnitsButton) {
  assignUnitsButton.addEventListener("click", getUnits);
}

document.addEventListener("click", (event) => {
  if (event.target.id.includes("u-")) {
    console.log("found it", event.target.id);//event.target.id = u-2
    const unitId = event.target.id.split("-")[1];//[u-, 2]
    //make fetch request to endpoint /storage/unitId/id
    const singleUnit = getUnitById(unitId)
    console.log(singleUnit)
  }
  // event.stopPropagation();
});