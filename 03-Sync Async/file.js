const fs = require("fs");

// console.log("1st\n");

// //Blocking or Synchronous code
// const result = fs.readFileSync("./Contact.txt", "utf-8");
// console.log(result);

// console.log("2nd");

//now Non - Blocking or Asynchronous code

console.log("3rd\n");
fs.readFile("./Contact.txt", "utf-8", (err, result) => {
    console.log(result);
});

console.log("4th");
