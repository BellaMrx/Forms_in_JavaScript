function init() {
    const registerForm = document.getElementById('register');
    registerForm.noValidate = true;       // Native validation off
    registerForm.addEventListener('submit', validateForm);
  }
  
  document.addEventListener('DOMContentLoaded', init);
  
  function validateForm(e) {
    const event = (e ? e : window.event);   // Event
    const form = (event.target              // Target element
      ? event.target
      : event.srcElement);
    let formIsValid = true;                 // Validity of the form
    const formElements =                    // Form elements that ...
      form.querySelectorAll(                // ... native validation ...
        'input, textarea, select');         // ... support.
    for (let i = 0; i < formElements.length; i++) {
      const formElement = formElements[i];
      if (formElement.willValidate !== 'undefined') {
        formElement.checkValidity();
      } else {
        // Browser does not support
        // native HTML5 validation
      }
      if (!formElement.validity.valid) {    // If value is not valid ...
        formIsValid = false;                // ... form data not valid.
      }
    }
    if (!formIsValid) {                     // If form data is not valid ...
      if (event.preventDefault) {           // ...
        event.preventDefault();             // ... prevent standard actions.
      }
    }
    return formIsValid;
  }
  