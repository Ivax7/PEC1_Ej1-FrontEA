const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const age = document.getElementById('age');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Show succes outline

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}


// Check email is valid

function checkEmail(input) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if(re.test(input.value)) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }

}


// Check required fields

function checkRequired(inputArr) {
  inputArr.forEach((input) => {
    if(input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input)
    }
  })
}

// Check passwords match
function checkPasswordsMatch(input1, input2) {
  if(input1.value !== input2.value) {
    showError(input2, 'Passwords do not match');
  } else {
    showSuccess(input2)
  }
}

// Check input length
function checkLength(input, min, max) {
  if(input.value.length < min) {
    showError(input, `${getFieldName(input)} must be at least ${min} characters`)
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} must be less than ${max} characters`)
  } else {
    showSuccess(input);
  }
}

// Check age

function checkAge(input, min, max) {
  if(input.value < min) {
    showError(input, `${getFieldName(input)} must be at least ${min} years`)
  } else if(input.value > max) {
    showError(input, `${getFieldName(input)} must be less than ${max} years`)
  } else {
    showSuccess(input)
  }
}

// Check password

function checkPassword(input, min) {

  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+\-={}|[\]\\:";'<>?,./]).{8,}$/;

  if(input.value.length < min) {
    showError(input, `${getFieldName(input)} must be at least ${min} characters`)
  } else if (!re.test(input.value)) {
    showError(input, `${getFieldName(input)} must contain uppercase, lowercase, a number, and a special character`);
  } else {
    showSuccess(input);
  }
}


// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listeners
form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkRequired([username, email, password, password2, age]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordsMatch(password, password2);
  checkAge(age, 0, 1000);
  checkPassword(password, 8);
});