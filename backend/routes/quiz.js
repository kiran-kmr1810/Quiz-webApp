const express = require("express")
const Quiz = require('../models/quiz.model');
const router = express();
var cors = require("cors")
router.use(cors());

//Read operation
router.route("/").get((req, res) => {
	Quiz.find()
	.then(login => res.json(login))
	.catch(err => res.status(400).json('Errors '+err));
});


//Create operation
router.route('/add').post((req, res) => {
	const qid = req.body.qid;
	const name = req.body.name;
    const date = req.body.date;
    const starttime = req.body.starttime;
    const duration = req.body.duration;
    const courseid = req.body.courseid;
    const questionids = req.body.questionids;
    //date.toDateString();

	const newQuiz = new Quiz({qid,name,date,starttime,duration,courseid,questionids});
  
	newQuiz.save()
	  .then(() => res.json('Quiz added!'))
	  .catch(err => res.status(400).json('Error: ' + err));
  });


//Read by id (id is specified by mongodb and we wont mostly use that)
router.route('/:id').get((req, res) => {
	Quiz.findById(req.params.id)
	.then(login => res.json())
	.catch(err => res.status(400).json('Errors '+err));
});


//Read by uid or any other value in a document
//change uid and you are good to go
//here it will return the role of that person with that specific UID
router.route('/qid/:qid').get((req, res) => {
Quiz.findOne({'qid': req.params.qid}, function(err,obj) { 
	res.json(obj); });
});


//Delete by id
router.route('/delete/:id').delete((req, res) => {
	Quiz.findByIdAndDelete(req.params.id)
	  .then(() => res.json('User deleted.'))
	  .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router