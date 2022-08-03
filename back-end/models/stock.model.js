//Require mongoose
const mongoose = require('mongoose')

//Create mongoose schema
const Stock = new mongoose.Schema({
    
    stockName: [String],
    ticker: [String],
    amount: [Number],
    price: [Number]
    
    }
)

//Create UserLoginModel using User mongoose schema
const StockModel = mongoose.model('StockModel', Stock)

//Export model
module.exports = StockModel