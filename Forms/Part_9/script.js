// The programmatic sending of a form:
function init() {
    const loginForm = document.getElementById('login');
    const loginButton = document.getElementById('submit');
    loginButton.addEventListener('click', (e) => {
      loginForm.submit();
    });
  }
  
  document.addEventListener('DOMContentLoaded', init);


// The programmatic resetting of a form:
/* 
function init() {
  const loginForm = document.getElementById('login');
  const resetButton = document.getElementById('reset');
  resetButton.addEventListener('click', (e) => {
    loginForm.reset();
  });
}

document.addEventListener('DOMContentLoaded', init);
*/