function init() {
    const messageContainer = document.getElementById('selection');  // Container for messages
    const order = document.getElementById('order');                 // <select> element
    // const order = document.forms.orderform.order;                // Alternative
    order.addEventListener('change', updateOrder);                  // Register listener
  
    function updateOrder(event) {
      while (messageContainer.firstChild) {             // Delete all messages
        messageContainer.removeChild(
          messageContainer.firstChild
        );
      }
      const options = this.selectedOptions;             // Selected options
      for (let i = 0; i < options.length; i++) {        // For each option ...
        const message = options[i].text                 // ... message ...
          + ' (' + options[i].value + ')';              // ... generate ...
        const div = document.createElement('div');      // ... and the ...
        const optionText = document.createTextNode(message);                     
        div.appendChild(optionText);                    
        messageContainer.appendChild(div);              // ... add container.
      }
    }
  }
  
  document.addEventListener('DOMContentLoaded', init);
  