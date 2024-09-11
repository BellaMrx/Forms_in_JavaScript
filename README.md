# Forms_in_JavaScript
 Forms with JavaScript


## Forms

### Part_1 - Access to forms

 [Part_1 - Code](https://github.com/BellaMrx/...nochAnpassen!!!!)

#### Explanation:
The HTML code (index.html) is a simple login form with an input field for the user name, a password field for entering a password, a checkbox for saving the entered login data and a button for submitting the form.

In the JavaScript code, the `forms` property of the `document` object contains a list of all forms on the respective web page. The individual forms in the list can be accessed via the index. The forms within the list are sorted in the order in which they appear on the website. The first form is at position 0, the second form at position 1 and so on. There is only one form here, which is why index 0 is used here. 

Furthermore, for each form that has a name (`name` attribute), a property with the same name is implicitly made available on the `document` object, which can be used to access the respective form. Here the form has the name `login`, so you can access the form via `document.login`.

The methods `getElementById()` and `querySelector()` can be used to clearly select elements so that there are no problems (position, already existing name) and therefore no adjustments to the JavaScript code are necessary.

Forms provide many properties: The `elements` property, which can be used to access the individual form elements contained in the form. The `name` property, which contains the name of the form and the `action` and `method` properties, which contain information about which action is to be triggered with the form (or to which URL the form data is to be sent) and which HTTP method is to be used (`GET` or `POST`).

 <img src="images/FormsJS_Part_1.png" width="700">


### Part_2 - Access to form elements

 [Part_2 - Code](https://github.com/BellaMrx/...nochAnpassen!!!!)

 Part_2 --> listing 7.4.

#### Explanation:
