const http = require("http");

const server = http.createServer((req, res) => {
  setTimeout(() => {
    res.end("Response after 15s");
  }, 15000);
})

server.listen(3000,()=>{
    console.log('Server running onport 3000')
    }
);