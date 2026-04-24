
const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
    // console.log("New Req Rec..");
    // res.end("Hey, Hello From Server");

    const log = `${Date.now()}: ${req.url} New Req Received\n`;
    fs.appendFile("log.txt", log, (err, data) => {
        switch(req.url){

            case "/":
                res.end("HomePage");
                break;
            case "/about":
               res.end("Hey I am Mubarak, I am a Full Stack Developer"); 
               break; 
            default:
                res.end("404 Not Found");    
        }
        res.end("Hey, hello Server Again");
    })
});


myServer.listen(8000, () => console.log("Server Started!"));