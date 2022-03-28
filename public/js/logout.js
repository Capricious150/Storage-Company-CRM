// IF YOU'RE LOOKING AT THIS PAGE, IT IS NOT ACTUALLY IMPLEMENTED IN OUR CODE.
// LOGOUT IS HANDLED IN PUBLIC/INDEX.JS IN THE FUNCTION CALLED 'logOut'

const logout = async () => {
    const response = await fetch('/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log out.');
    }
  };
  
  document.querySelector('logoutbutton').addEventListener('click', logout);
  