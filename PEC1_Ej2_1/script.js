
let submitButton = document.querySelector('button');
let form = document.querySelector('form');
let inputs = document.querySelectorAll('input');

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+\-={}|[\]\\:";'<>?,./]).{8,}$/;


function checkInput(input, e) {

  let existingError = input.nextElementSibling;
  if (existingError && existingError.classList.contains('error-message')) {
    existingError.remove();
  }

  let inputName = input.id[0].toUpperCase() + input.id.slice(1);
  let errorMessage = document.createElement('span');
  errorMessage.classList.add('error-message');
  errorMessage.style.color = "red";
  errorMessage.style.fontSize = "14px";

  switch (inputName) {
    case 'Username':
      if (input.value.length < 3) {
        e.preventDefault();
        errorMessage.textContent = `
        ${inputName} must be at least 3 characters
        `;
        input.insertAdjacentElement("afterend", errorMessage);
      }
      break;
  
    case 'Password':
      if (!passwordRegex.test(input.value) && input.value.length < 8) {
        e.preventDefault();
        errorMessage.innerHTML = `${inputName} must be at least 8 characters and <br>
        contain uppercase, lowercase, numbers, <br> and special characters`;
        
        input.insertAdjacentElement("afterend", errorMessage);
      }
      break;


    case 'Age':
      let ageValue = parseInt(input.value, 10);
      if (isNaN(ageValue) || ageValue < 0 || ageValue >= 1000) {
        e.preventDefault();
        errorMessage.textContent = `
        ${inputName} must be at least 0 and less than 1000
        `;
        input.insertAdjacentElement("afterend", errorMessage);
      }
      break;

    default:
      e.preventDefault();
      errorMessage.textContent = `
      ${inputName} is required
      `;
      input.insertAdjacentElement("afterend", errorMessage);
    }

  }

submitButton.addEventListener('click', (e) => {
  inputs.forEach(input => {
    checkInput(input, e)
  });
})

