const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const users = require('./routes/users')
const app = express()
const port = 7542;

const mongoose = require('mongoose');
const uri = 'mongodb+srv://skillforce:7401642D@cluster0.2tisn.mongodb.net/Cluster0?retryWrites=true&w=majority';
mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '))
db.once('open', function () {

})


app.use(cors());


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use('/users', users)

app.get('/tasks', (req, res) => {
    res.send('tasks')
})

app.use((req, res) => {
    res.send(404)
})


app.listen(process.env.PORT, () => {
})


