const mongoose = require("mongoose");

//schema
const urlSchemam = new mongoose.Schema({
    shortId:{
        type: String,
        required: true,
        unique: true,

    },
    redirectURL:{
        type: String,
        required: true,
    },
    visitHistory:[{ timestamp: {type: Number,}}],
},
{timestamps: true}
);

const URL = mongoose.model("URL", urlSchemam);

module.exports = URL;