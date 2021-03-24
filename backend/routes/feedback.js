const express = require("express")
const Feedback = require('../models/feedback.model');
const router = express();
var cors = require("cors")
router.use(cors());

//Read operation
router.route("/").get((req, res) => {
	Feedback.find()
	.then(login => res.json(login))
	.catch(err => res.status(400).json('Errors '+err));
});


//Create operation
router.route('/add').post((req, res) => {
	const sid = req.body.sid;
	const qid = req.body.qid;
    const comment = req.body.comment;

  
	const newFeedback = new Feedback({sid,qid,comment});
  
	newFeedback.save()
	  .then(() => res.json('Feedback details added!'))
	  .catch(err => res.status(400).json('Error: ' + err));
  });


//Read by id (id is specified by mongodb and we wont mostly use that)
router.route('/:id').get((req, res) => {
	Feedback.findById(req.params.id)
	.then(login => res.json())
	.catch(err => res.status(400).json('Errors '+err));
});


//Read by uid or any other value in a document
//change uid and you are good to go
//here it will return the role of that person with that specific UID
router.route('/sid/:sid').get((req, res) => {
Feedback.findOne({'sid': req.params.sid}, function(err,obj) { 
	res.json(obj); });
});


//Delete by id
router.route('/delete/:id').delete((req, res) => {
	Feedback.findByIdAndDelete(req.params.id)
	  .then(() => res.json('User deleted.'))
	  .catch(err => res.status(400).json('Error: ' + err));
  });


//update by id
router.route('/update/:id').post((req, res) => {
	Feedback.findById(req.params.id).then(feedback => {
		feedback.sid = req.body.sid;
	    feedback.qid = req.body.qid;
        feedback.comment = req.body.comment;
	feedback.save()
	  .then(() => res.json('User added!'))
	  .catch(err => res.status(400).json('Error: ' + err));
  	})
	  .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router
