//  Part 1: Variables & Conditionals
let examples = [];
let theme = 'light';
const header = document.querySelector('header');
const exampleList = document.getElementById('exampleList');

// Part 2: Custom Functions
function greetUser(name) {
  return `Hello, ${name}!`;
}

function calculateSum(a, b) {
  return a + b;
}

function isEven(num) {
  return num % 2 === 0;
}

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function formatDate(date) {
  return date.toLocaleDateString();
}

//  Part 3: Loop Examples
const rawExamples = [
  greetUser("Masai"),
  calculateSum(5, 7),
  isEven(10),
  getRandomItem(["apple", "banana", "cherry"]),
  formatDate(new Date()),
  calculateSum(100, 250),
  isEven(3),
  greetUser("Wabtech"),
  getRandomItem(["AI", "ML", "DL"]),
  formatDate(new Date("2025-08-27"))
];

// Using forEach loop to populate examples array
rawExamples.forEach(item => examples.push(item));

// Using for loop to log examples to console
for (let i = 0; i < examples.length; i++) {
  console.log(`Example ${i + 1}:`, examples[i]);
}

//  Part 4: DOM Manipulations
function changeHeader() {
  header.innerHTML = "<h1>Header Updated!</h1>";
}

function addExample() {
  const newItem = document.createElement("li");
  newItem.textContent = getRandomItem(examples);
  exampleList.appendChild(newItem);
}

function toggleTheme() {
  document.body.classList.toggle("dark-theme");
}
