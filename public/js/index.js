const viewCustButton = document.getElementById("viewCustomersButton");
const assignUnitsButton = document.getElementById("assignUnitsButton");
const logoutButton = document.getElementById("logoutButton");

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

// function myFunction() {
//   // Get the checkbox
//   var checkBox = document.getElementById("myCheck");
//   // Get the output text
//   var text = document.getElementById("text");

//   // If the checkbox is checked, display the output text
//   if (checkBox.checked == true){
//     text.style.display = "block";
//   } else {
//     text.style.display = "none";
//   }
// }

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

  // const current_customer = () =>{
  //   let currentCheckbox = $('#custCurnt')
    
  //   if (currentCheckbox.checked == true){
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

  // const good_standing = () => {
  //   let standingCheckbox = $('#custStndng')
  
  //   if (standingCheckbox.checked == true){
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

  // const insured = () => {
  //   let insuredCheckbox = $('#custInsrd')
    
  //   if (insuredCheckbox.checked == true){
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };
  
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

const logOut = async () => {
  const response = await fetch ('/logout/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  })

  if(response.ok){
    document.location.replace("/");
  }
}

const showModal = () => {
  $("#addcustModal").modal("show");
}

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



// document.addEventListener("click", (event) => {
//   if (event.target.id.includes("u-")) {
  //     console.log("found it", event.target.id);//event.target.id = u-2
  //     const unitId = event.target.id.split("-")[1];//[u-, 2]
//     //make fetch request to endpoint /storage/unitId/id
//     const singleUnit = getUnitById(unitId)
//     console.log(singleUnit)
//   }
//   // event.stopPropagation();
// });