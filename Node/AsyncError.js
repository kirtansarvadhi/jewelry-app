async function fetchData() {
  try {
    const data = await Promise.reject("Failed");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

fetchData();

