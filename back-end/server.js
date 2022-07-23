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

var dbUrl = 'mongodb+srv://albertnguyentran:Firehead123!@cluster0.jvszexw.mongodb.net/?retryWrites=true&w=majority'


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

var Message = mongoose.model('Message', {
    username: String,
    password: String
})

app.get('/api', (req, res) => {
    console.log('ye')
    res.send('o')
})

app.post('/api/hello', (req, res) => {
    res.send({express: 'hello'})
    console.log('hi')
})

app.post('/api', (req, res) => {
    console.log(req.body)

    
    var Login = new Message(req.body)
    var savedLogin = Login.save()
})