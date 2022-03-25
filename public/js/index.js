const viewCustButton = document.getElementById("viewCustomersButton");
const assignUnitsButton = document.getElementById("assignUnitsButton");
const Chart = require('chart.js');

const myChart = new doughnut.Chart(
  document.getElementById('myChart'),
  config
);
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