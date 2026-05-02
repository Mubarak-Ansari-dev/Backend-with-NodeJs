const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

// Rest API -
app.get("/api/users", (req, res) =>{
    return res.json(users)
});

// and here we are sending an HTML response instead of JSON. We are creating a simple unordered list of user first names and sending it as the response to the client.
app.get("/users", (req, res) => {
    const html = `
    <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
    return res.send(html);
});

//3 Get a specific user by ID
console.log("INDEX FILE RUNNING");

app.get("/api/users/:id", (req, res) =>{
    console.log("ID route hit");
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
});

//4 post
app.post("/api/users", (rq, res) =>{
    //create new user
    return res.json({status: "pending"});
});
//5 
app.patch("/api/users/:id", (req, res) => {
    // edit the user with id
    return res.json({ status: "pending"});
});
//6 delete
app.delete("/api/users/:id", (req, res) => {
    // delete the user with id
    return res.json({ status: "pending"});
});

app.listen(PORT, () => console.log(`Server Started on Port ${PORT}`));
