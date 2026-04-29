const http = require("http");
const fs = require("fs");
const url = require("url");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send("Hello from home page");
});
 app.get("/about", (req, res) =>{
        return res.send("Hello from about page");
    });

    function myHandler(req, res){  }

    const myServer = http.createServer(app);

myServer.listen(8000, () => console.log("Server Started!"));
