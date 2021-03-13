const express = require("express")
const Faculty = require('../models/faculty.model');
const router = express();
var cors = require("cors")
router.use(cors());

//Read operation
router.route("/").get((req, res) => {
	Faculty.find()
	.then(login => res.json(login))
	.catch(err => res.status(400).json('Errors '+err));
});


//Create operation
router.route('/add').post((req, res) => {
	const fid = req.body.fid;
	const name = req.body.name;
    const section = req.body.section;
    const subjectcodes = req.body.subjectcodes;
    const email = req.body.email;

  
	const newFaculty = new Faculty({fid,name,section,subjectcodes,email});
  
	newFaculty.save()
	  .then(() => res.json('Faculty details added!'))
	  .catch(err => res.status(400).json('Error: ' + err));
  });


//Read by id (id is specified by mongodb and we wont mostly use that)
router.route('/:id').get((req, res) => {
	Faculty.findById(req.params.id)
	.then(login => res.json())
	.catch(err => res.status(400).json('Errors '+err));
});


//Read by uid or any other value in a document
//change uid and you are good to go
//here it will return the role of that person with that specific UID
router.route('/fid/:fid').get((req, res) => {
Faculty.findOne({'fid': req.params.fid}, function(err,obj) { 
	res.json(obj); });
});


//Delete by id
router.route('/delete/:id').delete((req, res) => {
	Faculty.findByIdAndDelete(req.params.id)
	  .then(() => res.json('User deleted.'))
	  .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router