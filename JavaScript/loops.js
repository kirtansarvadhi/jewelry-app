// for loop
for (let i = 1; i <= 5; i++) {
  console.log("For loop:", i);
}


// while loop
let count = 1;
while (count <= 3) {
  console.log("While loop:", count);
  count++;
}


// do...while loop
let num = 1;
do {
  console.log("Do while loop:", num);
  num++;
} while (num <= 2);


// for...of loop (used with arrays)
let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
  console.log("Fruit:", fruit);
}
