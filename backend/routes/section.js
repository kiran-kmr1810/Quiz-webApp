const express = require("express")
const Section = require('../models/section.model');
const router = express();
var cors = require("cors")
router.use(cors());

//Read operation
router.route("/").get((req, res) => {
	Section.find()
	.then(login => res.json(login))
	.catch(err => res.status(400).json('Errors '+err));
});


//Create operation
router.route('/add').post((req, res) => {
	const sid = req.body.sid;
	const fid = req.body.fid;
    const cid = req.body.cid;

  
	const newSection = new Section({sid,fid,cid});
  
	newSection.save()
	  .then(() => res.json('Section details added!'))
	  .catch(err => res.status(400).json('Error: ' + err));
  });


//Read by id (id is specified by mongodb and we wont mostly use that)
router.route('/:id').get((req, res) => {
	Section.findById(req.params.id)
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
	Section.findByIdAndDelete(req.params.id)
	  .then(() => res.json('Section deleted.'))
	  .catch(err => res.status(400).json('Error: ' + err));
  });


//update by id
router.route('/update/:id').post((req, res) => {
	Section.findById(req.params.id).then(section => {
		student.sid = req.body.sid;
        student.fid = req.body.fid;
        student.cid = req.body.cid;
	section.save()
	  .then(() => res.json('User added!'))
	  .catch(err => res.status(400).json('Error: ' + err));
  	})
	  .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router
