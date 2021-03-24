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
	const sid = req.body.sid;
	const qid = req.body.qid;
    const mark = req.body.mark;
    const grade = req.body.grade;
    const result = req.body.result;

  
	const newResult = new Result({sid,qid,mark,grade,result});
  
	newResult.save()
	  .then(() => res.json('Result details added!'))
	  .catch(err => res.status(400).json('Error: ' + err));
  });


//Read by id (id is specified by mongodb and we wont mostly use that)
router.route('/:id').get((req, res) => {
	Result.findById(req.params.id)
	.then(login => res.json())
	.catch(err => res.status(400).json('Errors '+err));
});


//Read by uid or any other value in a document
//change uid and you are good to go
//here it will return the role of that person with that specific UID
router.route('/sid/:sid').get((req, res) => {
Result.findOne({'sid': req.params.sid}, function(err,obj) { 
	res.json(obj); });
});


//Delete by id
router.route('/delete/:id').delete((req, res) => {
	Result.findByIdAndDelete(req.params.id)
	  .then(() => res.json('User deleted.'))
	  .catch(err => res.status(400).json('Error: ' + err));
  });


//update by id
router.route('/update/:id').post((req, res) => {
	Result.findById(req.params.id).then(result => {
		result.sid = req.body.sid;
        result.qid = req.body.qid;
        result.mark = req.body.mark;
        result.grade = req.body.grade;
        result.result = req.body.result;
	result.save()
	  .then(() => res.json('User added!'))
	  .catch(err => res.status(400).json('Error: ' + err));
  	})
	  .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router
