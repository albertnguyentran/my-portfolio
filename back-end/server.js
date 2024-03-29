//Require all middleware and mongoose models
const express = require('express')
const app = express()
const http = require('http').Server(app)
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
var yahooFinance = require('yahoo-finance')

//Import Models
const UserModel = require('./models/models')

const jwt = require('jsonwebtoken')
const { quote } = require('yahoo-finance')

//Create server
app.use(express.static(__dirname))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

const server = http.listen(5000, () => {
    console.log('server is listening on port', server.address().port)
})

//Connect mongoose to mongodb
//.  //username:password@db-url

const dbUrl = 'mongodb+srv://username:password@my-portfolio.u56knxk.mongodb.net/?retryWrites=true&w=majority'
mongoose.Promise = Promise
mongoose.connect(dbUrl, (err) => {
    console.log('mongo db connection', err)
})


///------------Endpoints
//Get requests
app.get('/api', (req, res) => {

})

app.get('/api/user', async (req, res) => {
    try {
        const user = await UserModel.findOne({
            username: req.query.username,
            password: req.query.password
        })

        if (user) {
            console.log(user)
            return (user)

        } else {
            console.log('not found')
        }

    } catch (err) {
        console.log(err)
    }
})

//Post requests

//Create object of user request and store it to mongodb using mongoose
app.post('/api/register', async (req, res) => {
    try {

        //See if there is already a registered account
        const user = await UserModel.findOne({
            username: req.body.username,
        })

        const user2 = await UserModel.findOne({
            email: req.body.email
        })

        if (user || user2) {
            console.log('/api/register', 'account username or email already in use')
            return res.json({status: 500, user: false})

        } else if (!req.body.username || !req.body.password || !req.body.email){
            console.log('/api/register', 'missing data')
            return res.json({status: 500, user: 'missing'})

        } else {
            const userInfo = await new UserModel(
                {
                    username: req.body.username,
                    password: req.body.password,
                    email: req.body.email,
                    portfolios: []
                })
            
            //Save data to mongodb
            userInfo.save()
    
            return res.json({status: 200, user: true})
        }
        

    } catch (err) {
        res.sendStatus(500)
        
    }
})

//Verify user in mongodb, return JWT which can be decoded in the front end to display the rest of the data
app.post('/api/login', async (req, res) => {
    try {
        const user = await UserModel.findOne({
            username: req.body.username,
            password: req.body.password
        })
        
        if (user) {
            const token = jwt.sign({user}, 'secret')
            return res.json({status: 200, user: token})
            
        } else {
            return res.json({status: 500, user: false})

        }
    } catch (err) {
        console.log(err)
    }
})

app.get('/api/getdata', async (req, res) => {
    try {
        const user = await UserModel.findOne({
            username: req.query.username,
            password: req.query.password
        })
        
        if (user) {
            return res.json({status: 200, user: user})

        } else {
            return res.json({status: 500, user: false})
        }

    } catch (err) {
        console.log(err)
    }
})

app.get('/api/getindex', async (req, res) => {
    try {
        const getIndex = await UserModel.aggregate(
            [
                {
                    $match: {username: req.query.username}
                },
                {
                    $project:
                    {
                        result: {$indexOfArray: ["$portfolios.portfolioName", req.query.portfolioName]}
                    }
                }
            ]
        )
        
        if (getIndex) {
            return res.json({status: 200, index: getIndex[0].result})
        } else {
            return res.json({status: 500, index: null})
        }

    } catch (err) {
        console.log(err)
    }
})

app.post('/api/poststock', async (req, res) => {
    try {

        const result = await quote(req.body.ticker, ['summaryDetail', 'recommendationTrend'])

        var today = new Date()
        var currentMonth = String(today.getMonth() + 1).padStart(2, '0')
        var lastMonth = currentMonth - 5

        const historical = await yahooFinance.historical({
            symbol: req.body.ticker,
            from: '2022-' + lastMonth,
            to: '2022-' + currentMonth,
            period: 'm'

        })

        console.log(result, today, historical)

        if (!result) {
            return res.json({status: 500})

        } else if (result) {
            const stock = {
                ticker: req.body.ticker,
                amount: req.body.amount,
                price: req.body.price,
                currentprice: result.summaryDetail.previousClose,
                marketValue: (Math.round(req.body.amount * result.summaryDetail.previousClose)),
                oneprice: Math.round(historical[0].close),
                twoprice: (Math.round(historical[1].close)),
                threeprice: (Math.round(historical[2].close)),
                fourprice: (Math.round(historical[3].close)),
                fiveprice: (Math.round(historical[4].close)),
                sixprice: (Math.round(historical[5].close)),
                buy: result.recommendationTrend.trend[1].buy,
                hold: result.recommendationTrend.trend[1].hold,
                sell: result.recommendationTrend.trend[1].sell,
                lastmonth: '2022-' + lastMonth,
                currentmonth: '2022-' + currentMonth
            }

            const insertStock = await UserModel.updateOne(
                {
                    "username": req.body.username
                },
                {
                    $push: {
                        'portfolios.$[updatePortfolio].stocks': stock,
                    }
                },
                {
                    "arrayFilters": [
                        {"updatePortfolio.portfolioName": req.body.portfolioName}
                    ]
                }
            )
    
            if (insertStock) {
                return res.json({status: 200})
            } else {
                return res.json({status: 500})
            }
        }
        
    } catch (err) {
        return res.json({status: 500})
    }
})

app.post('/api/postportfolio', async (req, res) => {


    try {
        const insertPortfolio = await UserModel.updateOne(
            {
            "username": req.body.username,
            },
            {
                $push: {
                    portfolios: req.body.insertPortfolio
                }
            }     
        )

        if (insertPortfolio) {
            return res.json({status: 200})
        } else {
            return res.json({status: 500})
        }
    } catch (err) {
        console.log(err)
    }
})

app.post('/api/deletestock', async (req, res) => {
    try {
        const response = await UserModel.updateOne(
            {
                "username": req.body.username
            },
            { 
                $pull: {
                    "portfolios.$[updatePortfolio].stocks": req.body.stock
                }
            },
            {
                "arrayFilters": [
                    {"updatePortfolio.portfolioName": req.body.portfolioName}
                ]
            }
        )

        if (response) {
            return res.json({status: 200})
        } else {
            return res.json({status: 500})
        }

    } catch (err) {
        console.log(err)
    }
})

app.post('/api/deleteportfolio', async (req, res) => {
    try {
        const response = await UserModel.updateOne(
            {
                "username": req.body.username
            },
            { 
                $pull: {
                    portfolios: {portfolioName: req.body.portfolioName}
                }
            },
        )

        if (response) {
            return res.json({status: 200})
        } else {
            return res.json({status: 500})
        }

    } catch (err) {
        console.log(err)
    }

})


app.post('/api/updatestock', async (req, res) => {
    try {
        
        const result = await quote(req.body.stock.ticker, ['summaryDetail', 'recommendationTrend'])

        var today = new Date()
        var currentMonth = String(today.getMonth() + 1).padStart(2, '0')
        var lastMonth = currentMonth - 5
        
        const historical = await yahooFinance.historical({
            symbol: req.body.stock.ticker,
            from: '2022-' + lastMonth,
            to: '2022-' + currentMonth,
            period: 'm'
        })
        
        const response = await UserModel.updateOne(
            {
                "username": req.body.username
            },
            { 
                $set: {
                    "portfolios.$[updatePortfolio].stocks.$[updateStocks].currentprice": result.summaryDetail.previousClose,
                    "portfolios.$[updatePortfolio].stocks.$[updateStocks].marketValue": (Math.round(req.body.stock.amount * result.summaryDetail.previousClose)),
                    "portfolios.$[updatePortfolio].stocks.$[updateStocks].buy": (2*(result.recommendationTrend.trend[req.body.index].strongBuy) + result.recommendationTrend.trend[req.body.index].buy),
                    "portfolios.$[updatePortfolio].stocks.$[updateStocks].hold": result.recommendationTrend.trend[req.body.index].hold,
                    "portfolios.$[updatePortfolio].stocks.$[updateStocks].sell": (2*(result.recommendationTrend.trend[req.body.index].strongSell) + result.recommendationTrend.trend[req.body.index].sell),
                    "portfolios.$[updatePortfolio].stocks.$[updateStocks].oneprice": (Math.round(historical[0].close)),
                    "portfolios.$[updatePortfolio].stocks.$[updateStocks].twoprice": (Math.round(historical[1].close)),
                    "portfolios.$[updatePortfolio].stocks.$[updateStocks].threeprice": (Math.round(historical[2].close)),
                    "portfolios.$[updatePortfolio].stocks.$[updateStocks].fourprice": (Math.round(historical[3].close)),
                    "portfolios.$[updatePortfolio].stocks.$[updateStocks].fiveprice": (Math.round(historical[4].close)),
                    "portfolios.$[updatePortfolio].stocks.$[updateStocks].sixprice": (Math.round(historical[5].close)),
                    "portfolios.$[updatePortfolio].stocks.$[updateStocks].lastmonth": '2022-' + lastMonth,
                    "portfolios.$[updatePortfolio].stocks.$[updateStocks].currentmonth": '2022-' + currentMonth
                }
            },
            {
                "arrayFilters": [
                    {"updatePortfolio.portfolioName": req.body.portfolioName},
                    {"updateStocks._id": req.body.stock._id}
                ]
            }
        )

        if (response) {
            return res.json({status: 200})
        } else {
            return res.json({status: 500})
        }
    } catch (err) {
        console.log(err)
    }
})