
const viewCustButton = document.getElementById('viewCustomersButton');

const getCustomers = async () => {
    const response = await fetch('/customer/', {
        method: 'GET'
    })
    console.log(response);
    if (response.ok) {
        // document.location.replace('/customer/');
      } else {
        alert('Failed.');
      }
    }

const getCustomerById = async () => {
    const response = await fetch('/customer/id', {
        method: 'GET'
    })
    console.log(response);
    if (response.ok) {
        res.redirect('/customer/id:');
      } else {
        alert('Failed.');
      }
    }

//all employees
// const getEmployee = async () => {
//     const response = await fetch('/employee/', {
//         method: 'GET'
//     })
//     console.log(response);
//     if (response.ok) {
//       } else {
//         alert('Failed.');
//       }
//     }

viewCustButton.addEventListener('click', getCustomers);


