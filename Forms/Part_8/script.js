function init() {
    var messageContainer = document.getElementById('selection');
    var order = document.getElementById('order');
    var options = [
      {name: 'Pizza pepperoni', id: 'P001'},
      {name: 'Pizza marguerite', id: 'P002'},
      {name: 'Pizza cheese', id: 'P003'},
      {name: 'Pizza mozzarella', id: 'P004'},
      {name: 'Pizza hawaii', id: 'P005'}
    ];
    for(var i=0; i<options.length; i++) {
      order.add(
        new Option(              // Constructor for <option> elements
          options[i].name,       // Text to be displayed
          options[i].id,         // Optional value associated with the selection
          false,                 // Optional specification of whether value is preselected
          false                  // Optional specification of whether value is preselected
        )
      );
    }
    order.addEventListener('change', updateOrder);
  
    function updateOrder(event) {
      while (messageContainer.firstChild) {
        messageContainer.removeChild(messageContainer.firstChild);
      }
      for(var i=0; i<this.selectedOptions.length; i++) {
        var text = this.selectedOptions[i].text
          + ' (' + this.selectedOptions[i].value + ')';
        var divElement = document.createElement('div');
        var optionText = document.createTextNode(text);
        divElement.appendChild(optionText);
        messageContainer.appendChild(divElement);
      }
    }
  }
  
  document.addEventListener('DOMContentLoaded', init);
  