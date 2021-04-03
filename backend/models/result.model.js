const mongoose = require('mongoose');

var result = new mongoose.Schema({
  quizTitle:{
    type : String,
    required : true
  },
  mark: {
    type : Number,
    required : true
  }
})

const resultschema = new mongoose.Schema({
    email:{
      type : String,
      required : true
    },
    uid:{
      type : String,
      required : true
    },
    results : [result]
  });

const Result = mongoose.model('Result', resultschema);
module.exports = Result;