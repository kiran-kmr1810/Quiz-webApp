const express = require("express")
const Subject = require('../models/student.model');
const router = express();
var cors = require("cors")
router.use(cors());

//Read operation
router.route("/").get((req, res) => {
	Subject.find()
	.then(login => res.json(login))
	.catch(err => res.status(400).json('Errors '+err));
});


//Create operation
router.route('/add').post((req, res) => {
	const code = req.body.code;
	const name = req.body.name;

  
	const newSubject = new Subject({code,name});
  
	newSubject.save()
	  .then(() => res.json('Subject details added!'))
	  .catch(err => res.status(400).json('Error: ' + err));
  });


//Read by id (id is specified by mongodb and we wont mostly use that)
router.route('/:id').get((req, res) => {
	Subject.findById(req.params.id)
	.then(login => res.json())
	.catch(err => res.status(400).json('Errors '+err));
});


//Read by uid or any other value in a document
//change uid and you are good to go
//here it will return the role of that person with that specific UID
router.route('/code/:code').get((req, res) => {
Subject.findOne({'code': req.params.code}, function(err,obj) { 
	res.json(obj); });
});


//Delete by id
router.route('/delete/:id').delete((req, res) => {
	Subject.findByIdAndDelete(req.params.id)
	  .then(() => res.json('User deleted.'))
	  .catch(err => res.status(400).json('Error: ' + err));
  });


//update by id
router.route('/update/:id').post((req, res) => {
	Subject.findById(req.params.id).then(subject => {
		subject.code = req.body.code;
	    subject.name = req.body.name;
	subject.save()
	  .then(() => res.json('User added!'))
	  .catch(err => res.status(400).json('Error: ' + err));
  	})
	  .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router
