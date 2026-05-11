const express = require("express");

const{ connectToMongoDB} = require('./connect');

const urlRoute = require('./routes/url');

const app = express();
const PORT = 5000;

connectToMongoDB("mongodb://localhost:27017/url-shortener")
.then(() => console.log("Connected to MongoDB"));

app.use(express.json());
app.use('/url', urlRoute);

app.listen(PORT, () => console.log(`Server Started at PORT ${PORT}`));