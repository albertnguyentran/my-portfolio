//Require all middleware and mongoose models
const express = require('express')
const app = express()
const http = require('http').Server(app)
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

//Import Models
const UserLoginModel = require('./models/user.model')
const StockModel = require('./models/stock.model')
const PortfolioModel = require('./models/portfolio.model')
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
        const user = await UserLoginModel.findOne({
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

    console.log('/api/register', req.body.username)

    try {
        var userInfo = await new UserLoginModel(
            {

                username: req.body.username,
                password: req.body.password,
                email: req.body.email,
                
            })
        

        //Save data to mongodb
        userInfo.save()

        return res.json({status: 200})

    } catch (err) {
        res.sendStatus(500)
        
    }


})

//Verify user in mongodb, return JWT which can be decoded in the front end to display the rest of the data
app.post('/api/login', async (req, res) => {
    console.log('api/login', req.body.username, req.body.password)

    try {
        const user = await UserLoginModel.findOne({
            username: req.body.username,
            password: req.body.password
        })
        
        console.log('api/login', user)

        if (user) {

            const token = jwt.sign(
                {
                    username: user.username,
                    password: user.password,
                    portfolio: user.portfolio,
                    portfolios: 'A',
                    stocks: 'b',
                    ticker: '2',
                    amount: 40,
                    price: 45,
                    date: '4/20/18'


                }, 'secret'

            )


            return res.json({status: 200, user: token})
            
        } else {
            return res.json({status: 500, user: false})

        }
    } catch (err) {
        console.log(err)
    }
})

