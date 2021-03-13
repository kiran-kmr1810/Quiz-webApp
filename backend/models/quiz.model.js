const mongoose = require('mongoose');

const quizschema = new mongoose.Schema({
    qid:{
      type : String,
      required : true
    },
    name: {
      type : String,
      required : true
    },
    date:{
        type: Date,
        default: Date.now,
    },
    starttime:{
        type: String,
    },
    duration:{ 
        type : Number,
        required : true
    },
    courseid:{
        type : String,
        required : true
    },
    questionids:{
        type : Array,
        required : true
    }
  });

const Quiz = mongoose.model('Quiz', quizschema);
module.exports = Quiz;