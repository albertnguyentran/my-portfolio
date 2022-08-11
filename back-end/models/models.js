//Require mongoose
const mongoose = require('mongoose')

//Create mongoose schema
const User = new mongoose.Schema(
    {
        username: {type: String, required: true}, 
        password: {type: String, required: true},
        email: {type: String, required: true, unique: true},

    }
)

const Portfolio = new mongoose.Schema({
    
    portfolioName: String,
    stocks: [Stock]
    }
)

const Stock = new mongoose.Schema({
    
    stockName: [String],
    ticker: [String],
    amount: [Number],
    price: [Number]
    
    }
)

//Create UserLoginModel using User mongoose schema
const UserLoginModel = mongoose.model('UserLoginModel', User)
const PortfolioModel = mongoose.model('PortfolioModel', Portfolio)
const StockModel = mongoose.model('StockModel', Stock)


//Export model
module.exports = PortfolioModel
module.exports = UserLoginModel
module.exports = StockModel