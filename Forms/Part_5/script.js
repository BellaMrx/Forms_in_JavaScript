function init() {
    const messageContainer = document.getElementById('selection');      // Container for messages
    const orderForm = document.getElementById('orderform');             // Form
    // const order = document.forms.orderform.order;                    // Alternative
    const radioButtons = orderForm.order;
    for(let i=0; i<radioButtons.length; i++) {
      radioButtons[i].addEventListener('change', function(e) {
        console.log(e.target.value);                    // e.g. "P002"
        console.log(this.value);                        // e.g. "P002"
        messageContainer.innerText = this.value;        // Display message
      });
    }
  }
  
  document.addEventListener('DOMContentLoaded', init);
  