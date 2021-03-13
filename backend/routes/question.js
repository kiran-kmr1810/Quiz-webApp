const express = require("express")
const Question = require('../models/question.model');
const router = express();
var cors = require("cors")
router.use(cors());

//Read operation
router.route("/").get((req, res) => {
	Question.find()
	.then(login => res.json(login))
	.catch(err => res.status(400).json('Errors '+err));
});


//Create operation
router.route('/add').post((req, res) => {
	const quesid = req.body.quesid;
	const question = req.body.question;
    const oa = req.body.oa;
    const ob = req.body.ob;
    const oc = req.body.oc;
    const od = req.body.od;
    const answer = req.body.answer;
    const co = req.body.co;
    const mark = req.body.mark;

  
	const newQuestion = new Question({quesid,question,oa,ob,oc,od,answer,co,mark});
  
	newQuestion.save()
	  .then(() => res.json('Question added!'))
	  .catch(err => res.status(400).json('Error: ' + err));
  });

//Read by uid or any other value in a document
//change uid and you are good to go
//here it will return the role of that person with that specific UID
router.route('/quesid/:quesid').get((req, res) => {
Question.findOne({'quesid': req.params.quesid}, function(err,obj) { 
	res.json(obj); });
});


//Delete by id
router.route('/delete/:id').delete((req, res) => {
	Question.findByIdAndDelete(req.params.id)
	  .then(() => res.json('Question deleted.'))
	  .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router