// const customerList = document.querySelector('ul');
// const employeeList = document.querySelector('ul');
const viewCustButton = document.getElementById("viewCustomersButton");
const assignUnitsButton = document.getElementById("assignUnitsButton");

//all customers

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

function getUnitById(id) {//this route isnt working 
  fetch(`/storage/${id}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data)
    });
}

function getCustomerById() {
  fetch("../models/employee")
    .then((response) => {
      return response.json();
    })
    .then((data) => {});
}

//all employees
function getEmployee() {
  fetch("../models/employee")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for (var i = 0; i < data.length; i++)
        var listItem = document.createElement("li");
      listItem.textContent = data[i];
      employeeList.appendChild(listItem);
    });
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
    getUnitById(unitId)
    console.log(unitId);
    //make fetch request to endpoint /storage/unitId/id
    const singleUnit = getUnitById(unitId)
    console.log(singleUnit)
  }
  // event.stopPropagation();
});


