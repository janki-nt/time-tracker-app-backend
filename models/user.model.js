var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    password: String,
    firstName: String,
    lastName: String,
    role: {
        type: String,
        enum: ['employee', 'admin', 'manager', 'guest'],
        default: 'guest'
    },
    isVerified: Boolean,
}, { timestamps: true });

const User = mongoose.model("users", UserSchema);

module.exports = User;

