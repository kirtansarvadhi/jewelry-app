function fetchData() {
      console.log("infatc");
  return new Promise(resolve => {
    setTimeout(() => resolve("Data received"), 1000);
  });
}

async function main() {
  console.log("earlystart");
  const data = await fetchData();
  console.log("start");
  console.log(data);
  console.log("end");
}
main();

