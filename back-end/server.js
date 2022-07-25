var express = require('express')
var app = express()
var http = require('http').Server(app)
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var cors = require('cors')

mongoose.Promise = Promise

app.use(express.static(__dirname))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

var server = http.listen(5000, () => {
    console.log('server is listening on port', server.address().port)
})

var dbUrl = 'mongodb+srv://albertnguyentran:!!@my-portfolio.u56knxk.mongodb.net/?retryWrites=true&w=majority'



mongoose.connect(dbUrl, (err) => {
    console.log('mongo db connection', err)
})

var UserData = new mongoose.Schema({
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

const loginschema = new mongoose.Schema({username: 'string', password: 'string'})
const Login = mongoose.model('Tank', loginschema)


app.get('/api', (req, res) => {
    console.log('ye')
    res.send('o')
})

app.post('/api/hello', (req, res) => {
    res.send({express: 'hello'})
    console.log('hi')
})

app.post('/api/user', (req, res) => {

    var userLoginInfo = new Login({username: req.body.username, password: req.body.password})
    console.log(req.body.username, req.body.password)
    console.log(userLoginInfo)
    
    userLoginInfo.save(function(err) {
        if(err) return handleError(err)
    })
})

app.get('/api/user', (req, res) => {
    console.log(req.query.username)
    console.log(req.query.password)


})