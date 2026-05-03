const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;
// Middleware - Plugin for Express. It is a function that takes in the request and response objects and can modify them or perform some action before passing control to the next middleware or route handler. Middleware functions are executed in the order they are defined in the code.
app.use(express.urlencoded({ extended: false })); // This middleware is used to parse URL-encoded data from the request body. It allows us to access form data sent in POST requests.

// Custom middleware to log the request method and URL
app.use((req, res, next) => {
    console.log("Hello from Middleware 1");
    //return res.json({msg: "Hello from Middleware 1"});
    next(); // This function is used to pass control to the next middleware or route handler. If we don't call next(), the request will be left hanging and the server will not respond.
});

//next middleware
app.use((req, res, next) => {
    console.log("Hello from Middleware 2");
    //return res.end("Hey from Middleware 2");
    next();
});

// Routes
app.get("/users", (req, res) => {
    const html = `
    <ul>
    ${users.map((user) => `<li>${user.name}</li>`).join("")}
    </ul>`;
    res.send(html);
});

//Rest API - Get all users
app.get("/api/users", (req, res) =>{
    return res.json(users);
});

app
  .route("/api/users/:id")
  .get((req, res) =>{
    const id = Number(req.params.id);
    const user = users.find((user) =>user.id === id);
    return res.json(user);
  })
  .patch((req, res) =>{
    //edit user with id
    return res.json({status: "Pending"});
  })
  .delete((req, res) =>{
    //delete user with id
    return res.json({status: "Pending"});
  })

  //below code is for creating a new user. We are using the POST method to send data to the server. We are also using the fs module to write the new user data to the MOCK_DATA.json file. The new user is added to the users array and then written to the file. Finally, we send a response back to the client with the status of the operation and the id of the newly created user.     
app.post("/api/users", (req, res) =>{
    const body = req.body;
    users.push({...body, id: users.length + 1});
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
        return res.json({status:"success", id: users.length});
    });

});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));