let str = "  Hello JavaScript World  ";

// length
console.log(str.length); 
// 26

// case
console.log(str.toUpperCase()); 
// "  HELLO JAVASCRIPT WORLD  "

console.log(str.toLowerCase()); 
// "  hello javascript world  "

// trim
console.log(str.trim()); 
// "Hello JavaScript World"

console.log(str.trimStart()); 
// "Hello JavaScript World  "

console.log(str.trimEnd()); 
// "  Hello JavaScript World"

// search
console.log(str.includes("Java")); 
// true

console.log(str.startsWith("  He")); 
// true

console.log(str.endsWith("ld  ")); 
// true

console.log(str.indexOf("Java")); 
// 8

console.log(str.lastIndexOf("o")); 
// 20

// char access
console.log(str.charAt(2)); 
// "H"

console.log(str.charCodeAt(2)); 
// 72

console.log(str.at(-1)); 
// " "

// extract
console.log(str.slice(2, 10)); 
// "Hello Ja"

console.log(str.substring(2, 10)); 
// "Hello Ja"

// replace
console.log(str.replace("World", "Backend")); 
// "  Hello JavaScript Backend  "

console.log(str.replaceAll("o", "0")); 
// "  Hell0 JavaScript W0rld  "

// split & join
const words = str.trim().split(" ");
console.log(words); 
// ["Hello", "JavaScript", "World"]

console.log(words.join("-")); 
// "Hello-JavaScript-World"

// repeat & pad
console.log("JS".repeat(3)); 
// "JSJSJS"

console.log("5".padStart(3, "0")); 
// "005"

console.log("5".padEnd(3, "0")); 
// "500"

// regex
console.log("abc123".match(/\d+/)); 
// ["123"]

console.log("a1b2".search(/\d/)); 
// 1

// compare
console.log("a".localeCompare("b")); 
// -1
