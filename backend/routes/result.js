const express = require("express")
const Result = require('../models/result.model');
const router = express();
var cors = require("cors")
router.use(cors());

//Read operation
router.route("/").get((req, res) => {
	Result.find()
	.then(login => res.json(login))
	.catch(err => res.status(400).json('Errors '+err));
});


//Create operation
router.route('/add').post((req, res) => {
	const quizTitle = req.body.quizTitle;
	const uid = req.body.uid;
	const topic = req.body.topic;
	const mark = req.body.mark;
	const course = req.body.course;
	const date = req.body.date;

	const newResult = new Result({quizTitle,uid,topic,mark,course,date});
  
	newResult.save()
	  .then(() => res.json('Result details added!'))
	  .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router
