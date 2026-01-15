console.log("Start");
console.time("loop");
for (let i = 0; i < 1e5; i++) {
  console.log(i);
  
}
console.timeEnd("loop");
console.log("End");