function init() {
    const messageContainer = document.getElementById('selection');      // Container for messages
    const order = document.getElementById('order');                     // <select>-element
    // const order = document.forms.orderform.order;                    // Alternative
    order.addEventListener('change', updateOrder);                      // Register listener
  
    function updateOrder(event) {                       // this is from ...
                                                        // ... type HTMLSelectElement
      const value = this.value;                         // The currently selected value
      const index = this.selectedIndex;                 // Index of the selected option
      const option = this.item(index);                  // Selected <option> element
      const text = this.item(index).text;               // Text of the <option> element
      // value = this.item(index).value                 // Also contains the value
      const message = text + ' (' + value + ')';        // Create message
      messageContainer.innerText = message;             // Display message
    }
  }
  
  document.addEventListener('DOMContentLoaded', init);
  