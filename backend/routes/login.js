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
  
	const newUser = new Login({uid});
  
	newUser.save()
	  .then(() => res.json('User added!'))
	  .catch(err => res.status(400).json('Error: ' + err));
  });

//Read by uid
router.route('/:id').get((req, res) => {
	Login.findById(req.params.id)
	.then(login => res.json(login))
	.catch(err => res.status(400).json('Errors '+err));
});

//update by uid
router.route('/update/:id').post((req, res) => {
	Login.findById(req.params.id)
	  .then(login => {
		login.uid = req.body.username;
		login.role = req.body.description;
	newUser.save()
	  .then(() => res.json('User added!'))
	  .catch(err => res.status(400).json('Error: ' + err));
  	})
	  .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router

