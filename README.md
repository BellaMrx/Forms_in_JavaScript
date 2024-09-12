# Forms_in_JavaScript
 Forms with JavaScript


## Forms

### Access to forms - [Part_1](https://github.com/BellaMrx/Forms_in_JavaScript/tree/main/Forms/Part_1)

#### Explanation:
This example shows the various options for accessing forms on a website.

  ```
    <form id="login" name="login" method="post" action="login.html">
      <div class="form-group">
        <label for="username">Username:</label>
        <br>
        <input type="text" id="username" name="username" value="" placeholder="Username">
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <br>
        <input type="password" id="password" name="password" value="" placeholder="Password">
      </div>
      <div class="checkbox">
        <label for="remember">
          <input type="checkbox" id="remember" name="remember" value="on">
          Remember login on this computer
        </label>
      </div>
      <button type="submit" id="submit" name="submit">Login</button>
    </form>
  ```

The HTML code [index.html](https://github.com/BellaMrx/Forms_in_JavaScript/blob/main/Forms/Part_1/index.html) is a simple login form with an input field for the user name, a password field for entering a password, a checkbox for saving the entered login data and a button for submitting the form.

  ```
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
  ```

In the JavaScript code [script.js](https://github.com/BellaMrx/Forms_in_JavaScript/blob/main/Forms/Part_1/script.js), the `forms` property of the `document` object contains a list of all forms on the respective web page. The individual forms in the list can be accessed via the index. The forms within the list are sorted in the order in which they appear on the website. The first form is at position 0, the second form at position 1 and so on. There is only one form here, which is why index 0 is used here. 

Furthermore, for each form that has a name (`name` attribute), a property with the same name is implicitly made available on the `document` object, which can be used to access the respective form. Here the form has the name `login`, so you can access the form via `document.login`.

The methods `getElementById()` and `querySelector()` can be used to clearly select elements so that there are no problems (position, already existing name) and therefore no adjustments to the JavaScript code are necessary.

  ```
   // Access to selected properties of a form
    const form = document.getElementById('login');
    console.log(form.elements);           // Form elements
    console.log(form.length);             // Number of form elements
    console.log(form.name);               // Name of the form, here “login”
    console.log(form.action);             // Content of the “action” attribute
    console.log(form.method);             // HTTP method, here “post”
  ```

Forms provide many properties: The `elements` property, which can be used to access the individual form elements contained in the form. The `name` property, which contains the name of the form and the `action` and `method` properties, which contain information about which action is to be triggered with the form (or to which URL the form data is to be sent) and which HTTP method is to be used (`GET` or `POST`).

 <img src="images/FormsJS_Part_1.png" width="900">

[Complete code - Part_1 - click here](https://github.com/BellaMrx/Forms_in_JavaScript/tree/main/Forms/Part_1)

-----------------------------------------------------------------------

### Access to form elements - [Part_2](https://github.com/BellaMrx/Forms_in_JavaScript/tree/main/Forms/Part_2)

#### Explanation:
This example shows the various options for accessing individual form elements within a form.

This JavaScript code ([script.js](https://github.com/BellaMrx/Forms_in_JavaScript/blob/main/Forms/Part_1/script.js)) contains a list of the form elements that are contained within the respective form. The `elements` property is available for each form object and individual elements in this list are accessed via the index, which also reflects the position of the respective element within the form. The selection via the DOM selection methods works in the same way as in [Part_1](https://github.com/BellaMrx/Forms_in_JavaScript?tab=readme-ov-file#part_1---access-to-forms). Access via the DOM selection methods is best protected against changes to the HTML code.

  ```
    // Access via DOM selection methods
    const fieldUserNameById = document.getElementById('username');
    const fieldPasswordById = document.getElementById('password');
    const fieldRememberById = document.getElementById('remember');
    const buttonSubmitById = document.getElementById('submit');
    console.log(fieldUserNameById.id);    // "username"
    console.log(fieldPasswordById.id);    // "password"
    console.log(fieldRememberById.id);    // "remember"
    console.log(buttonSubmitById.id);     // "submit"
  
    // Access via elements property
    const form = document.getElementById('login');
    const formElements = form.elements;
    console.log(formElements.length);     // 4
    const fieldUserName = formElements[0];
    const fieldPassword = formElements[1];
    const fieldRemember = formElements[2];
    const buttonSubmit = formElements[3];
    console.log(fieldUserName.id);        // "username"
    console.log(fieldPassword.id);        // "password"
    console.log(fieldRemember.id);        // "remember"
    console.log(buttonSubmit.id);         // "submit"
  ```

Each form element is represented by a special object type. Text fields, password fields, radio buttons and checkboxes are represented by the object type `HTMLInputElement`. Text areas are represented by the object type `HTMLTextAreaElement`, selection lists by the object type `HTMLSelectElement` and individual options within selection lists by the object type `HTMLOptionElement`.

 <img src="images/FormsJS_Part_2.png" width="900">

 [Complete code - Part_2 - click here](https://github.com/BellaMrx/Forms_in_JavaScript/tree/main/Forms/Part_2)

-----------------------------------------------------------------------