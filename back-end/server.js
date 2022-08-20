//Require all middleware and mongoose models
const express = require('express')
const app = express()
const http = require('http').Server(app)
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

//Import Models
const UserModel = require('./models/models')

const jwt = require('jsonwebtoken')

//Create server
app.use(express.static(__dirname))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

const server = http.listen(5000, () => {
    console.log('server is listening on port', server.address().port)
})

//Connect mongoose to mongodb
const dbUrl = 'mongodb+srv://albertnguyentran:Firehead123!@my-portfolio.u56knxk.mongodb.net/?retryWrites=true&w=majority'
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

    /*var userLoginInfo = new Login({username: req.body.username, password: req.body.password})
    console.log(req.body.username, req.body.password)
    console.log(userLoginInfo)
    
    userLoginInfo.save(function(err) {
        if(err) return handleError(err)
    })*/

    try {

        //See if there is already a registered account
        const user = await UserModel.findOne({
            username: req.body.username,
            email: req.body.email
        })

        if (user) {
            console.log('/api/register', 'account username or email already in use')
            return res.json({status: 500, user: false})

        } else {
            const userInfo = await new UserModel(
                {
                    username: req.body.username,
                    password: req.body.password,
                    email: req.body.email,
                    portfolios: [
                        {
                            portfolioName: 'Test',
                            stocks: [
                                {
                                    ticker: 'AAPL',
                                    amount: 5,
                                    price: 100
                                },
                                {
                                    ticker: 'GOOGL',
                                    amount: 2,
                                    price: 300
                                },
                                {
                                    ticker: 'FB',
                                    amount: 4,
                                    price: 200
                                }
                            ]
                        },
                        {
                            portfolioName: 'Test2',
                            stocks: [
                                {
                                    ticker: 'MSFT',
                                    amount: 4,
                                    price: 200
                                }
                            ]
                        }
                    ]  
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
    console.log('api/login', req.body.username, req.body.password)

    try {
        const user = await UserModel.findOne({
            username: req.body.username,
            password: req.body.password
        })
        
        console.log('api/login', user)

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
        const username = req.query.username
        const password = req.query.password

        const user = await UserModel.findOne({
            username: username,
            password: password
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

app.post('/api/stocks', async (req, res) => {
    try {
        
        const insertStock = await UserModel.updateOne(
            {
                "username": req.body.username
            },
            {
                $push: {
                    'portfolios.$[updatePortfolio].stocks': req.body.stock,
                }
            },
            {
                "arrayFilters": [
                    {"updatePortfolio.portfolioName": req.body.portfolioName}
                ]
            }
        )

        if (insertStock) {
            return res.json({status: 220})
        } else {
            return res.json({status: 500})
        }
        
    } catch (err) {
        console.log(err)
    }
})