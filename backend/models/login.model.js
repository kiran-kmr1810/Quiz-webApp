const mongoose = require('mongoose');

const loginschema = new mongoose.Schema({
    uid:{
      type : String,
      required : true
    },
    role: {
      type : String,
    },
  });

const Login = mongoose.model('Login', loginschema);
module.exports = Login;