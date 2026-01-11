//  Function Declaration
function greet(name) {
  return "Hello, " + name;
}
console.log(greet("Alex"));


// Function Expression
const add = function (a, b) {
  return a + b;
};
console.log(add(3, 4));


// Arrow Function
const multiply = (a, b) => a * b;
console.log(multiply(2, 5));


// Callback Function
function greetUser(name, callback) {
  console.log("Hi " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greetUser("Sam", sayBye);


// Higher-Order Function
function calculate(a, b, operation) {
  return operation(a, b);
}

const sub = (x, y) => x - y;
console.log(calculate(10, 4, sub)); // 6


// Pure vs Impure Functions
function square(n) {
  return n * n;
}
console.log(square(4)); // 16

let total = 0;
function addToTotal(n) {
  total += n;
}
addToTotal(5);
console.log(total);


//  Rest & Spread

// Rest Operator (...)
function sumAll(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(sumAll(1, 2, 3, 4)); // 10

// Spread Operator (...)
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]
