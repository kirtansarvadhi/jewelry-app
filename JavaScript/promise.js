let isJayOnline = true;

let chatPromise = new Promise((resolve, reject) => {
  if (isJayOnline) {
    resolve("Jay is online. You can chat now!");
  } else {
    reject("Jay is offline. Try later.");
  }
});

chatPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
