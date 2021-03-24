const mongoose = require('mongoose');

const feedbackschema = new mongoose.Schema({
    sid:{
      type : String,
      required : true
    },
    qid: {
      type : String,
      required : true
    },
    comment:{
        type:String,
        required : true
    }
  });

const Feedback = mongoose.model('Feedback', feedbackschema);
module.exports = Feedback;