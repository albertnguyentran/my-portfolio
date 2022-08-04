//Require mongoose
const mongoose = require('mongoose')

//Create mongoose schema
const Portfolio = new mongoose.Schema({
    
    portfolioName: [String],

    //How to connect stock.model.js to this?
    stocks: Stock

    }
)

//Create UserLoginModel using User mongoose schema
const PortfolioModel = mongoose.model('PortfolioModel', Portfolio)

//Export model
module.exports = PortfolioModel