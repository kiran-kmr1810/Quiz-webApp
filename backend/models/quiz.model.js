const mongoose = require('mongoose');


var questions = new mongoose.Schema({
  question:String,
  questionType:{
    type : String,
    default : "text"
  },
  answerSelectionType:{
    type : String,
    default : "single"
  },
  answers:Array,
  correctAnswer:Number,
  explanation:String,
  point:Number,
})

const quizschema = new mongoose.Schema({
    quizTitle:{
      type : String,
      required : true
    },
    quizSynopsis: {
      type : String,
      required : true
    },
    questions:[questions],
    date:{
        type: Date,
        default: Date.now,
    },
    starttime:{
        type: String,
    },
    duration:{ 
        type : Number,
    },
    courseid:{
        type : String,
    },
    
  });

const Quiz = mongoose.model('Quiz', quizschema);
module.exports = Quiz;