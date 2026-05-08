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
},
   {timestamps: true}
);

// Schema is Done here. Now Model
const User = mongoose.model("user", userSchema);

module.exports = User;