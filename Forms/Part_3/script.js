function init() {
    const inputUsername = document.getElementById('username');
    const inputPassword = document.getElementById('password');
  
    inputUsername.addEventListener('change', function(e) {
      console.log(inputUsername.value);     // Input value
      console.log(this.value);              // Input value
    });
    inputPassword.addEventListener('change', function(e) {
      console.log(inputPassword.value);     // Input value
      console.log(this.value);              // Input value
    });
  
    inputUsername.addEventListener('change', (e) => {
      console.log(inputUsername.value);     // Input value
      console.log(this.value);              // undefined
    });
    inputPassword.addEventListener('change', (e) => {
      console.log(inputPassword.value);     // Input value
      console.log(this.value);              // undefined
    });
  
    inputUsername.addEventListener('change', (e) => {
      console.log(inputUsername.value);     // Input value
      console.log(e.target.value);          // Input value
    });
    inputPassword.addEventListener('change', (e) => {
      console.log(inputPassword.value);     // Input value
      console.log(e.target.value);          // Input value
    });
  };
  
  document.addEventListener('DOMContentLoaded', init);
  