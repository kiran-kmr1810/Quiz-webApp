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

router.route('/quizname/:quizTitle').get((req, res) => {
	Quiz.findOne({'quizTitle': req.params.quizTitle}, function(err,obj) { 
		res.json(obj); });
});

router.route('/:id').get((req, res) => {
	Quiz.findById(req.params.id)
	.then(login => res.json(login))
	.catch(err => res.status(400).json('Errors '+err));
});

//Create operation
router.route('/add').post((req, res) => {
	const quizTitle = req.body.quizTitle;
	const quizSynopsis = req.body.quizSynopsis;
	const topic = req.body.topic;
	const course = req.body.course;
	const duration = req.body.duration;
    const questions = req.body.questions;
	const date = req.body.date;
	const stime = req.body.stime;
	const ftime = req.body.ftime;

	const newQuiz = new Quiz({quizTitle,quizSynopsis,course,topic,date,stime,ftime,duration,questions});
  
	newQuiz.save()
	  .then(() => res.json('Quiz added!'))
	  .catch(err => res.status(400).json('Error: ' + err));
  });


module.exports = router