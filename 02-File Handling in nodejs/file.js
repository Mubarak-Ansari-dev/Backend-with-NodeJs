;const fs = require("fs");

//here fs is file system module(built in module) which is used to handle files in nodejs

//Sync..
//fs.writeFileSync("./test.txt", "Hey there");

//Async..
//fs.writeFile("./test.txt", "Hey there Async here", (err) => {} );

// const result = fs.readFileSync("./contacts.txt", "utf-8");
// console.log(result);

// fs.readFile("./contacts.txt", "utf-8", (err, result) => {
//     if (err){
//         console.log("Error", err);
//     }
//     else{
//         console.log(result);
//     }
// }); 


fs.appendFileSync("./test.txt", `Hey there\n`);

fs.appendFileSync("./test.txt", `${Date.now()} hey there\n`);



























// ./ -> current directory
// ../ -> parent directory