const express = require("express");
const User = require("../models/user");

const router = express.Router();



//Rest API - Get all users
router.get("/", async (req, res) => {
    const allDbusers = await User.find({});
    res.json(allDbusers);
});

router  
    .route("/:id")
    .get(async (req, res) => {
      
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ error: "user not found" });
        return res.json(user);
    })
    .patch(async (req, res) => {
        //edit user with id
        await User.findByIdAndUpdate(req.params.id, {lastName: "Updated"});
        return res.json({ status: "User updated successfully" });
    })
    .delete(async (req, res) => {
        //delete user with id
        await User.findByIdAndDelete(req.params.id);
        return res.json({ status: "User deleted successfully" });
    })

router.post("/", async (req, res) => {
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

module.exports = router;