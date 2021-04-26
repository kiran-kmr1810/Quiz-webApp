const mongoose = require('mongoose');

const resultschema = new mongoose.Schema({
    quizTitle:{
      type : String,
      required : true
    },
    uid:{
      type : String,
      required : true
    },
    course:{
      type : String,
      required : true
    },
    topic:{
      type : String,
      required : true
    },
    date:{
      type : String,
      required : true
    },
    mark:{
      type : String,
      required : true
    },
  });

const Result = mongoose.model('Result', resultschema);
module.exports = Result;