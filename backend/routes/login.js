const express = require("express")
const Login = require('../models/login.model');
const router = express.Router();

//Read operation
router.route("/").get((req, res) => {
	Login.find()
	.then(login => res.json(login))
	.catch(err => res.status(400).json('Errors '+err));
});


//Create operation
router.route('/add').post((req, res) => {
	const uid = req.body.uid;
	const role = req.body.role;
  
	const newUser = new Login({uid,role});
  
	newUser.save()
	  .then(() => res.json('User added!'))
	  .catch(err => res.status(400).json('Error: ' + err));
  });


//Read by id (id is specified by mongodb and we wont mostly use that)
router.route('/:id').get((req, res) => {
	Login.findById(req.params.id)
	.then(login => res.json(login.uid))
	.catch(err => res.status(400).json('Errors '+err));
});


//Read by uid or any other value in a document
//change uid and you are good to go
router.route('/uid/:uid').get((req, res) => {
Login.findOne({'uid': req.params.uid}, function(err,obj) { 
	res.json(obj.role); });
});


//Delete by id
router.route('/delete/:id').delete((req, res) => {
	Login.findByIdAndDelete(req.params.id)
	  .then(() => res.json('User deleted.'))
	  .catch(err => res.status(400).json('Error: ' + err));
  });


//update by id
router.route('/update/:id').post((req, res) => {
	Login.findById(req.params.id).then(login => {
		login.uid = req.body.uid;
		login.role = req.body.role;
	login.save()
	  .then(() => res.json('User added!'))
	  .catch(err => res.status(400).json('Error: ' + err));
  	})
	  .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router

