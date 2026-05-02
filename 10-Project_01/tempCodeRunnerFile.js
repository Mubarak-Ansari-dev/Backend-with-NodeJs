app.get("/api/users/:id", (req, res) =>{
    console.log("ID route hit");
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
});
