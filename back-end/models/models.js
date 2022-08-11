//Require mongoose
const mongoose = require('mongoose')

//Create mongoose schema

const Stock = new mongoose.Schema({
    
    ticker: String,
    amount: Number,
    price: Number
    
    })

const Portfolio = new mongoose.Schema({
    
    portfolioName: String,
    stocks: [Stock]

    })

const User = new mongoose.Schema({
    
        username: {type: String, required: true}, 
        password: {type: String, required: true},
        email: {type: String, required: true, unique: true},
        portfolios: [{type: Portfolio, unique: true}]

    })


//Create UserLoginModel using User mongoose schema
const UserModel = mongoose.model('UserModel', User)



//Export model
module.exports = UserModel