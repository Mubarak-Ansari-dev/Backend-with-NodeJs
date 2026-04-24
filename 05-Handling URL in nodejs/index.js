const http = require("http"); // built in module to create server in nodejs
const fs = require("fs"); // built in module to handle files in nodejs  

const myServer = http.createServer((req, res) =>{
    const log = `${Date.now()}: ${req.url} New Req Received\n`;
    fs.appendFile("log.txt", log, (err, data) =>{
        switch(req.url){
            case "/":
            res.end("Home Page");
            break;
            case "/about":
            res.end("hey there Mubarak here");
            break;
            default:
                res.end("Page Not Found");
        }
    });
});

// to start the server
myServer.listen(8000, () => console.log("Server Started!"));