const mongoose = require('mongoose');

const loginschema = new mongoose.Schema({
    uid:{
      type : String,
      required : true
    },
    email: {
      type : String,
    },
    role: {
      type : String,
    },
    name: {
      type : String,
    },
    id: {
      type : String,
    },
    phone: {
      type : String,
    },
    cl: {
      type : String,
    },
    imgl:{
      type : String,
    },
  });

const Login = mongoose.model('Login', loginschema);
module.exports = Login;