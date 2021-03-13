const express = require("express")
const Student = require('../models/student.model');
const router = express();
var cors = require("cors")
router.use(cors());

//Read operation
router.route("/").get((req, res) => {
	Student.find()
	.then(login => res.json(login))
	.catch(err => res.status(400).json('Errors '+err));
});


//Create operation
router.route('/add').post((req, res) => {
	const sid = req.body.sid;
	const name = req.body.name;
    const section = req.body.section;
    const subjectcodes = req.body.subjectcodes;
    const email = req.body.email;

  
	const newStudent = new Student({sid,name,section,subjectcodes,email});
  
	newStudent.save()
	  .then(() => res.json('Student details added!'))
	  .catch(err => res.status(400).json('Error: ' + err));
  });


//Read by id (id is specified by mongodb and we wont mostly use that)
router.route('/:id').get((req, res) => {
	Student.findById(req.params.id)
	.then(login => res.json())
	.catch(err => res.status(400).json('Errors '+err));
});


//Read by uid or any other value in a document
//change uid and you are good to go
//here it will return the role of that person with that specific UID
router.route('/sid/:sid').get((req, res) => {
Student.findOne({'sid': req.params.sid}, function(err,obj) { 
	res.json(obj); });
});


//Delete by id
router.route('/delete/:id').delete((req, res) => {
	Student.findByIdAndDelete(req.params.id)
	  .then(() => res.json('User deleted.'))
	  .catch(err => res.status(400).json('Error: ' + err));
  });


//update by id
router.route('/update/:id').post((req, res) => {
	Student.findById(req.params.id).then(student => {
		student.sid = req.body.sid;
        student.name = req.body.name;
        student.section = req.body.section;
        student.subjectcodes = req.body.subjectcodes;
        student.email = req.body.email;
	student.save()
	  .then(() => res.json('User added!'))
	  .catch(err => res.status(400).json('Error: ' + err));
  	})
	  .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router
