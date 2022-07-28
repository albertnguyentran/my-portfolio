//---
const express = require('express')
const app = express()
const http = require('http').Server(app)
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const UserLoginModel = require('./models/user.model')
const jwt = require('jsonwebtoken')

//---
app.use(express.static(__dirname))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

const server = http.listen(5000, () => {
    console.log('server is listening on port', server.address().port)
})

///---
const dbUrl = 'mongodb+srv://albertnguyentran:Firehead123!@my-portfolio.u56knxk.mongodb.net/?retryWrites=true&w=majority'
mongoose.Promise = Promise
mongoose.connect(dbUrl, (err) => {
    console.log('mongo db connection', err)
})


///Endpoints

app.get('/api', (req, res) => {

})

app.post('/api/hello', (req, res) => {
    res.send({express: 'hello'})
    console.log('hi')
})

app.post('/api/register', async (req, res) => {

    /*var userLoginInfo = new Login({username: req.body.username, password: req.body.password})
    console.log(req.body.username, req.body.password)
    console.log(userLoginInfo)
    
    userLoginInfo.save(function(err) {
        if(err) return handleError(err)
    })*/

    console.log(req.body.username)

    try {
        var userInfo = await new UserLoginModel(
            {
                username: req.body.username,
                password: req.body.password,
                email: req.body.email,
                portfolio: {
                    stocks: req.body.stocks
                }
            })

        userInfo.save()

        return res.json({status: 200})

    } catch (err) {
        res.sendStatus(500)
        
    }


})

app.post('/api/login', async (req, res) => {
    console.log(req.body.username, req.body.password)

    const user = await UserLoginModel.findOne({
        username: req.body.username,
        password: req.body.password
    })
    
    console.log('here')
    console.log(user.portfolio)
    console.log(user.portfolio.stocks)

    if (user) {

        const token = jwt.sign(
            {
                username: user.username,
                password: user.password,
                portfolio: user.portfolio,
                stocks: user.portfolio.stocks

            }, 'secret'

        )
        
        return res.json({status: 200, user: token})
        
    } else {
        return res.json({status: 500, user: false})

    }
})

app.get('/api/user', async (req, res) => {
   

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


})