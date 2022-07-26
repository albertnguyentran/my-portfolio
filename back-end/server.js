const express = require('express')
const app = express()
const http = require('http').Server(app)
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const UserLoginModel = require('./models/user.model')

mongoose.Promise = Promise

app.use(express.static(__dirname))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

const server = http.listen(5000, () => {
    console.log('server is listening on port', server.address().port)
})

const dbUrl = 'mongodb+srv://albertnguyentran:Firehead123!@my-portfolio.u56knxk.mongodb.net/?retryWrites=true&w=majority'



mongoose.connect(dbUrl, (err) => {
    console.log('mongo db connection', err)
})

const UserData = new mongoose.Schema({
    username: String,
    password: String,
    portfolio: {
        investments: {
            ticker:  String,
            date: String,
            amount: String
        }
    }

})




app.get('/api', (req, res) => {
    console.log('ye')
    res.send('o')
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
            })

        userInfo.save()

    } catch (err) {
        res.sendStatus(500)
        console.log(err)
    }


})

app.post('/api/login', async (req, res) => {

})

app.get('/api/user', (req, res) => {
    console.log(req.query.username)
    console.log(req.query.password)


})