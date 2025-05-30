// Getting DOM Elements
const main = document.getElementById("main");
const addUserBtn = document.getElementById("add-user");
const doubleBtn = document.getElementById("double");
const filterBtn = document.getElementById("filter");
const sortBtn = document.getElementById("sort");
const sumBtn = document.getElementById("sum");

// Initializing Data Array
let data = [];

//  Fetch Random User from randomuser.me API

async function generateRandomUser() {
  // wait for the results from API
  const res = await fetch("https://randomuser.me/api");
  //   wait for response to convert into JSON
  const data = await res.json();

  //   console.log(data);

  //   Get the user data
  const user = data.results[0];

  //   Create the new user
  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    worth: Math.round(Math.random() * 1000000),
  };

  //   add the new user into the data array
  addData(newUser);
}

// Function to add user data into user data array
function addData(newuser) {
  // add the new user data in to the user data array
  data.push(newUser);
  // update the DOM to display users in the data array
  updateDOM();
}

// Function to Double Money of all users
function doubleMoney() {
  data = data.map((user) => {
    return { ...user, balance: user.balance * 2 };
  });
  updateDOM();
}

console.log("new user data", data);
// update the DOM using the new user data array
updateDOM();

// Function to Filter only Millionaire Users
function filterusers() {
  data = data.filter((user) => user.balance > 1000000);
  //   update the DOM with new user data
  updateDOM();
}

// Function to sort user by balance
function sortByBalance() {
  // Sort the users by balance using a compare function inside sort
  data = data.sort((a, b) => (acc += b.balance - a.balance));
  //   update the DOM with new user data
  updateDOM();
}

// Function to sum all users balance into total balance
function totalBalance() {
  // Update the DOM with new user data
  updateDOM();
  // Add up all balance from all users
  // Accumulator starts at 0 and adds the current users balance for each iteration
  const balance = data.reduce((acc, user) => (acc += user.balance), 0);
  // Create a div for the balance
  const balanceElement = document.createElement("div");
  // Set the innerHTML for new div
  balanceElement.innerHTML = `<h3>Total Balance: ${formatNumberToDollar(
    balance
  )}</h3>`;
  // Append Balance in main element
  main.appendChild(balanceElement);
}

// Function to format random number as money
function formatNumberToDollar(number) {
  return number.toFixed(2).replace(/\d(\d{3}+\.)/g, "$&,");
}

// Update the UI with data from the user data array
function updateDOM(userData = data) {
  // Clear prvious UI
  main.innerHTML = "<h2><strong>User</strong> Wealth</h2>";
  // Loop through userData and render in the UI
  userData.forEach((user) => {
    // Create a new div element for the user
    const userDiv = document.createElement("div");
    // Apply the user class to the new div
    userDiv.classList.add("user");
    // Add inner HTML to the user Div
    userDiv.innerHTML = `<strong>${user.name}</strong>
                            ${formatNumberToDollar(user.balance)}`;
    // Add the new element into the DOM
    main.appendChild(userDiv);
  });
}

// Event Listeners
// 1. Listen for click on Add User Button
addUserBtn.addEventListener("click", generateRandomUser);

// 2. Listen for click on Double Button
doubleBtn.addEventListener("click", doubleMoney);

// 3. Listen for click on Filter Button
filterBtn.addEventListener("click", filterusers);

// 4. Listen for click on sort button
sortBtn.addEventListener("click", sortByBalance);

// 5. Listen for click on sum button
sumBtn.addEventListener("click", totalBalance);

// Create a random user
generateRandomUser();
generateRandomUser();
generateRandomUser();
generateRandomUser();
generateRandomUser();
