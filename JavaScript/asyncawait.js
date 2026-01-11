function getUserName() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Jay");
    }, 1000);
  });
}

function getCity() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Surat");
    }, 1500);
  });
}

async function showDetails() {
  let name = await getUserName();  // first await
  let city = await getCity();      // second await

  console.log("Name:", name);
  console.log("City:", city);
}

showDetails();
