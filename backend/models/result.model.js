const mongoose = require('mongoose');

const resultschema = new mongoose.Schema({
    sid:{
      type : String,
      required : true
    },
    qid: {
      type : String,
      required : true
    },
    mark:{
        type : Number,
        required : true
    },
    grade:{ 
        type : string ,
        required : true
    },
    result:{
        type : String,
        required : true
    }
  });

const Result = mongoose.model('Result', resultschema);
module.exports = Result;