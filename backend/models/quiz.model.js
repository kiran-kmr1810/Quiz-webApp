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
  correctAnswer:String,
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
        type: String,
        required : true
    },
    duration:{
      type: String,
      required : true
    },
    stime:{
        type: String,
        required : true
    },
    ftime:{
      type: String,
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
  });

const Quiz = mongoose.model('Quiz', quizschema);
module.exports = Quiz;