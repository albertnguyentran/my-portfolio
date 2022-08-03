//Require mongoose
const mongoose = require('mongoose')

//Create mongoose schema
const User = new mongoose.Schema(
    {
        username: {type: String, required: true}, 
        password: {type: String, required: true},
        email: {type: String, required: true, unique: true},

        portfolio: {
            portfolios: [{
                stocks: [{
                    ticker: [String],
                    amount: [Number],
                    price: [Number],
                    date: [String],
                }]
            }]
        }
    }
)

//Create UserLoginModel using User mongoose schema
const UserLoginModel = mongoose.model('UserLoginModel', User)

//Export model
module.exports = UserLoginModel