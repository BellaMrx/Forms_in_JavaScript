function init() {
    const checkbox = document.getElementById('remember');
    checkbox.addEventListener('change', (e) => {
      console.log(checkbox.value);    // "on"
      console.log(checkbox.checked);  // true or false
      console.log(this.value);        // undefined
      console.log(this.checked);      // undefined
    });
    checkbox.addEventListener('change', function(e) {
      console.log(checkbox.value);    // "on"
      console.log(checkbox.checked);  // true or false
      console.log(this.value);        // "on"
      console.log(this.checked);      // true or false
    });
  };
  
  document.addEventListener('DOMContentLoaded', init);
  