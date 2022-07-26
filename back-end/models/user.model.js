const mongoose = require('mongoose')

const User = new mongoose.Schema(
    {
        username: {type: String, required: true}, 
        password: {type: String, required: true},
        email: {type: String, required: true, unique: true}
    }
)

const UserLoginModel = mongoose.model('UserLoginModel', User)

module.exports = UserLoginModel