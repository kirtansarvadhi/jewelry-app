const user = {
  name: "Rahul",
  age: 22,
  address: {
    city: "Delhi"
  }
};

// access
console.log(user.name); 
// "Rahul"

console.log(user["age"]); 
// 22

// add/update
user.email = "rahul@gmail.com";
user.age = 23;

// delete
delete user.email;

// keys / values / entries
console.log(Object.keys(user)); 
// ["name","age","address"]

console.log(Object.values(user)); 
// ["Rahul",23,{city:"Delhi"}]

console.log(Object.entries(user)); 
// [["name","Rahul"],["age",23],["address",{...}]]

// fromEntries
const entries = [["a", 1], ["b", 2]];
console.log(Object.fromEntries(entries)); 
// { a:1, b:2 }

// assign
const merged = Object.assign({}, user, { role: "user" });
console.log(merged); 
// {name:"Rahul", age:23, address:{...}, role:"user"}

// spread
const clone = { ...user };
console.log(clone); 
// shallow copy of user

// checks
console.log("name" in user); 
// true

console.log(user.hasOwnProperty("age")); 
// true

// optional chaining
console.log(user.address?.city); 
// "Delhi"

console.log(user.profile?.bio); 
// undefined

// nullish coalescing
const role = user.role ?? "guest";
console.log(role); 
// "guest"

// freeze
const config = { PORT: 3000 };
Object.freeze(config);
config.PORT = 4000;
console.log(config); 
// { PORT: 3000 }

// seal
const obj = { a: 1 };
Object.seal(obj);
obj.a = 2;
obj.b = 3;
console.log(obj); 
// { a:2 }

// loop
for (let key in user) {
  console.log(key, user[key]);
}
// name Rahul
// age 23
// address { city: "Delhi" }

for (const [k, v] of Object.entries(user)) {
  console.log(k, v);
}
// same output as above
