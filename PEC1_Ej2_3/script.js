const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.ocupied)');


const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = parseInt(movieSelect.value);
let exchangeRate = 1;

const currency = document.getElementById('currency');


populateUI();
calculate();

// Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}

// Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));
  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;

  const convertedPrice = (selectedSeatsCount * ticketPrice * exchangeRate).toFixed(2);
  total.innerText = `${convertedPrice} ${currency.value}`;
}


// Get data from localstorage and populate UI

function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if(selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

  if(selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

// Movie select event
movieSelect.addEventListener('change', e => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
})


// Seat click event
container.addEventListener('click', e => {
  if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected');
    updateSelectedCount()
  }
})


// Initial count and total set
updateSelectedCount();

currency.addEventListener('change', calculate);

function calculate() {
  const currencyValue = currency.value;
  
  fetch(`https://v6.exchangerate-api.com/v6/a5845194cdcffe510122bf20/latest/USD`)
    .then(res => res.json())
    .then(data => {
      if (data.result === 'error') {
        throw new Error("Failed to fetch exchange rates");
      }

      exchangeRate = data.conversion_rates[currencyValue] || 1;

      movieSelect.querySelectorAll('option').forEach(option => {
        let basePrice = parseFloat(option.value);
        let convertedPrice = (basePrice * exchangeRate).toFixed(2);
        option.innerHTML = `${option.textContent.split(" ")[0]} <span class="price">(${currencyValue} ${convertedPrice})</span>`;
      });

      updateSelectedCount();
    })
    .catch(error => {
      console.error("Error fetching exchange rate:", error);
    });
}


calculate()