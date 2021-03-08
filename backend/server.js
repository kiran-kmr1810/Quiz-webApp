const express = require('express');
const mongoose = require('mongoose');
const loginrouter = require('./routes/login');
var bodyParser = require('body-parser');
const app = express();
const port = 5003;

const url = `mongodb+srv://kk:kk@cluster0.gjovc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}

mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

app.listen(port, function() {
        console.log(`listening on : ${port}`)
})

app.use(bodyParser());
app.use('/login',loginrouter);


