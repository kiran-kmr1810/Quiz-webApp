const mongoose = require('mongoose');

const questionschema = new mongoose.Schema({
    quesid:{
      type : String,
      required : true
    },
    question: {
      type : String,
      required : true
    },
    oa:{
        type: String,
        required : true
    },
    ob:{
        type: String,
        required : true
    },
    oc:{
        type: String,
    },
    od:{
        type: String,
    },
    answer:{ 
        type : String ,
        required : true
    },
    co:{ 
        type : String ,
        required : true
    },
    mark:{
        type : Number,
        required : true
    }
  });

const Question = mongoose.model('Question', questionschema);
module.exports = Question;