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
	const email = req.body.email;
	const results = req.body.results;
	const uid = req.body.uid;

	const newResult = new Result({email,results,uid});
  
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
router.route('/email/:email').get((req, res) => {
Result.findOne({'email': req.params.email}, function(err,obj) { 
	res.json(obj); });
});

module.exports = router
