const express = require("express");
const fs = require("fs");

const mongoose = require('mongoose');
//const users = require("./MOCK_DATA.json"); now users ko database se fetch karte hain

const app = express();
const PORT = 8000;

// Connection to MongoDB
mongoose
    .connect(  "mongodb://127.0.0.1:27017/mydatabase")
    .then(() => console.log("MongoDB Connected"))
    //if any error occurs
    .catch((err) => console.log("Mongo Error", err));


//Schema - Blueprint for the data.
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
    },
});
// Schema is Done here. Now Model
const User = mongoose.model("user", userSchema);



// Middleware - Plugin for Express. It is a function that takes in the request and response objects and can modify them or perform some action before passing control to the next middleware or route handler. Middleware functions are executed in the order they are defined in the code.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
    fs.appendFile(
        "log.txt",
        `${new Date().toISOString()} - ${req.method} ${req.url}\n`,
        (err) => {
            if (err) {
                console.error("Error writing to log file:", err);
            }
        }
    );
    next();
});

//Routes
app.get("/users", async (req, res) => {
    const allDbusers = await User.find({});
    const html = `
    <ul>
        ${allDbusers.map(user => `<li>${user.firstName} ${user.lastName} - ${user.email}</li>`).join("")}
    </ul>`
    res.send(html);
});

//Rest API - Get all users
app.get("/api/users", async (req, res) => {
    const allDbusers = await User.find({});
    res.json(allDbusers);
});

app
    .route("/api/users/:id")
    .get(async (req, res) => {
      
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ error: "user not found" });
        return res.json(user);
    })
    .patch(async (req, res) => {
        //edit user with id
        return res.json({ status: "Pending" });
    })
    .delete(async (req, res) => {
        //delete user with id
        return res.json({ status: "Pending" });
    })

app.post("/api/users", async (req, res) => {
    const body = req.body;
    if (
        !body ||
        !body.FirstName ||
        !body.lastName ||
        !body.email ||
        !body.gender
    ) {
        return res.status(400).json({
            message:
                "All fields are required"
        });
    }
     const result =  await User.create({
        firstName: body.FirstName,
        lastName: body.lastName,
        email: body.email,
        gender: body.gender
    });

    console.log("User Created", result);

    return res.status(201).json({
        message: "User created succesfully"
    })

});

app.listen(PORT, () => {
    console.log(`Server Started at PORT: ${PORT}`);
})
