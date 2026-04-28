//these 3 modules are built in to node, so we don't need to install them with npm

const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) =>{
    if(req.url ==="/favicon.ico") return res.end();// to ignore the favicon request
    const log = `${Date.now()}: ${req.url} New Req Received\n`;
    const myUrl = url.parse(req.url, true);

    fs.appendFile("log.txt", log, (err, data) => {
        switch(myUrl.pathname){
            case "/":
              if(req.method === "GET") res.end("Home Page");
              break;
            case "/about":
              const username = myUrl.query.myname; // to get the query parameter from the url
              res.end(`Hey there ${username}`);
              break;
            case "/search":
              const search = myUrl.query.searchquery; // to get the query parameter from the url
              res.end(`Your search query result is: ${search}`);
              break;
            case "/signup":
              if(req.method ==="GET" ) res.end("Signup Page");
              else if (req.method === "POST"){
                //DB Query
                res.end("Signup Successful");
              }   
             default:
                res.end("Page Not Found");    
        }
    });
});

myServer.listen(8000, () => console.log("Server Started!"));    