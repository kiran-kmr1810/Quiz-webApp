const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const app = express();
const port = 5003;

//import the file here
const loginrouter = require('./routes/login');
const studentrouter = require('./routes/student');
const facultyrouter = require('./routes/faculty');
const quizrouter = require('./routes/quiz');
const resultrouter = require('./routes/result');
const sectionrouter = require('./routes/section');
const subjectrouter = require('./routes/subject');
const feedbackrouter = require('./routes/feedback');

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

//add route here
app.use(bodyParser());
app.use('/login',loginrouter);
app.use('/student',studentrouter);
app.use('/faculty',facultyrouter);
app.use('/quiz',quizrouter);
app.use('/result',resultrouter);
app.use('/subject',subjectrouter);
app.use('/section',sectionrouter);
app.use('/feedback',feedbackrouter);


