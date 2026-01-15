let arr = [1, 2, 3];

// add/remove
arr.push(4);       
// arr = [1,2,3,4]

arr.pop();         
// arr = [1,2,3]

arr.unshift(0);    
// arr = [0,1,2,3]

arr.shift();       
// arr = [1,2,3]

console.log(arr);  
// [1,2,3]

// slice & splice
console.log(arr.slice(1, 3)); 
// [2,3]

arr.splice(1, 1, 99);
console.log(arr);  
// [1,99,3]

// concat
console.log(arr.concat([5, 6])); 
// [1,99,3,5,6]

// search
console.log(arr.includes(99)); 
// true

console.log(arr.indexOf(99)); 
// 1

// iteration
arr.forEach(x => console.log(x * 2));
// 2
// 198
// 6

const mapped = arr.map(x => x * 10);
console.log(mapped); 
// [10,990,30]

const filtered = arr.filter(x => x > 2);
console.log(filtered); 
// [99,3]

console.log(arr.find(x => x === 99)); 
// 99

console.log(arr.findIndex(x => x === 99)); 
// 1

// condition
console.log(arr.some(x => x > 50)); 
// true

console.log(arr.every(x => typeof x === "number")); 
// true

// reduce
const sum = arr.reduce((a, b) => a + b, 0);
console.log(sum); 
// 103

// sort & reverse
console.log([3, 1, 2].sort((a, b) => a - b)); 
// [1,2,3]

console.log(arr.reverse()); 
// [3,99,1]

// flat
console.log([1, [2, [3,[4]]]].flat(3)); 
// [1,2,3]

// join
console.log(arr.join("-")); 
// "3-99-1"

// checks
console.log(Array.isArray(arr)); 
// true

console.log(Array.from("abc")); 
// ["a","b","c"]

console.log(Array.of(1, 2, 3)); 
// [1,2,3]


