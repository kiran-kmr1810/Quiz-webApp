const mongoose = require('mongoose');

const studentschema = new mongoose.Schema({
    sid:{
      type : String,
      required : true
    },
    name: {
      type : String,
      required : true
    },
    section:{
        type:String,
        required : true
    },
    subjectcodes:{ 
        type : Array ,
        required : true
    },
    email:{
        type : String,
        required : true
    }
  });

const Student = mongoose.model('Student', studentschema);
module.exports = Student;