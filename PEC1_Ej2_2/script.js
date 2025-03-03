const currencyEl_one = document.getElementById('currency-one');
const currencyEl_two = document.getElementById('currency-two');

const amountEl_one = document.getElementById('amount-one');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

const loadingEl = document.createElement('div');
const errorEl = document.createElement('div');


document.body.appendChild(loadingEl);
document.body.appendChild(errorEl);

function showLoading() {
  loadingEl.innerText = 'Loading... Please wait...';
  loadingEl.style.display = 'block';
  errorEl.style.display = 'none';
}

function showError(message) {
  loadingEl.style.display = 'none';
  errorEl.innerText = `Error: ${message}`;
  errorEl.style.display = 'block';
}

function preventNegativeInput(inputElement) {
  if (parseFloat(inputElement.value) < 0) {
    inputElement.value = '';
  }
}

function calculate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;
  
  showLoading();
    fetch(
      `https://v6.exchangerate-api.com/v6/a5845194cdcffe510122bf20/latest/${currency_one}`
    )
    .then(res => res.json())
    .then(data => {
      if (data.result === 'error') {
        throw new Error("Failed to fetch exchange rates");
      }

      const rate = data.conversion_rates[currency_two];
      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
      amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
      loadingEl.style.display = 'none';
    })
    .catch(error => {
      showError(error.message);
    });
}

currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', () => {
  preventNegativeInput(amountEl_one);
  calculate();
});

currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', () => {
  preventNegativeInput(amountEl_two);
  calculate();
});

swap.addEventListener('click', () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  calculate();
});

calculate();
