const fs = require("fs");

fs.writeFile("example.txt", "Hello, File System!\n", (err) => {
  if (err) throw err;

  fs.readFile("example.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);

    fs.appendFile("example.txt", "This line was added later.\n", (err) => {
      if (err) throw err;

      fs.readFile("example.txt", "utf8", (err, updated) => {
        if (err) throw err;
        console.log(updated);
      });
    });
  });
});
