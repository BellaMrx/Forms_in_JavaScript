function init() {
  // Access to a form
    // Access via DOM select methods
    const formById = document.getElementById('login');
    const formByName = document.getElementsByName('login')[0];
    const formBySelector = document.querySelector('form');
    // Access via the forms property
    const formByFormsField = document.forms[0];
    // Access via the name of the form
    const formByNameField = document.login;
    console.log(formById.id);              // "login"
    console.log(formByName.id);            // "login"
    console.log(formBySelector.id);        // "login"
    console.log(formByFormsField.id);      // "login"
    console.log(formByNameField.id);       // "login"
  
  // Access to selected properties of a form
    const form = document.getElementById('login');
    console.log(form.elements);           // Form elements
    console.log(form.length);             // Number of form elements
    console.log(form.name);               // Name of the form, here “login”
    console.log(form.action);             // Content of the “action” attribute
    console.log(form.method);             // HTTP method, here “post”
  }
  
  document.addEventListener('DOMContentLoaded', init);
  
// More information on this code can be found in the documentation (README.md)