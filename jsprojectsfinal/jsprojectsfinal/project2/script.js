// Get DOM Elements
const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

let ticketPrice = +movieSelect.value;


// Function to update counts
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  const countSelectedSeats = selectedSeats.length;

  count.innerText = countSelectedSeats;
  total.innerText = ticketPrice * countSelectedSeats;
}

// Event Listener for Change on Select Movie Dropdown
movieSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

// Event Listener for Click on Available Seats
container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
    updateSelectedCount();
  }
});

