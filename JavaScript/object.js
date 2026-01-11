// Object Creation & Mutation
let user = {
  name: "Jay",
  age: 22
};

console.log(user.name); // Jay

// Mutate (change) object
user.age = 23;
user.city = "Surat";

console.log(user);


// Destructuring
let person = {
  firstName: "Dhruv",
  country: "India",
  state: "Gujarat",
  city: "Ahmedabad",
  job: "Developer"
};

const { firstName, job, city } = person;
console.log(firstName); // Dhruv
console.log(job);       // Developer
console.log(city);      // Ahmedabad


// Shallow vs Deep Copy
let original = { a: 1, b: { c: 2 } };

// Shallow copy
let shallowCopy = { ...original };
shallowCopy.b.c = 99;

console.log(original.b.c); // 99 (affected)

// Deep copy (using JSON method)
let deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.b.c = 5;

console.log(original.b.c); // 99 (not affected by deep copy)


// Map vs Object

// Object
let obj = {};
obj["name"] = "Jay";

// Map
let map = new Map();
map.set("name", "Dhruv");
map.set("city", "Surat");

console.log(obj);
console.log(map.get("name"));
console.log(map.get("city"));


// Set (stores unique values)
let numbers = new Set([1, 2, 2, 3, 4, 4]);

numbers.add(5);
numbers.add(3); // ignored (already exists)

console.log(numbers); // Set {1,2,3,4,5}


// JSON Handling
let data = {
  id: 1,
  name: "Jay",
  country: "India",
  state: "Gujarat",
  city: "Ahmedabad",
  published: true
};

// Convert JS object to JSON string
let jsonString = JSON.stringify(data);
console.log(jsonString);

// Convert JSON string back to JS object
let parsedData = JSON.parse(jsonString);
console.log(parsedData);
