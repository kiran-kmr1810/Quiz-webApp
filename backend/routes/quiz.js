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
	Faculty.findOne({'quizTitle': req.params.quizTitle}, function(err,obj) { 
		res.json(obj); });
});

//Create operation
router.route('/add').post((req, res) => {
	const quizTitle = req.body.quizTitle;
	const quizSynopsis = req.body.quizSynopsis;
    const questions = req.body.questions;

	const newQuiz = new Quiz({quizTitle,quizSynopsis,questions});
  
	newQuiz.save()
	  .then(() => res.json('Quiz added!'))
	  .catch(err => res.status(400).json('Error: ' + err));
  });


module.exports = router