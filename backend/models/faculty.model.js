const mongoose = require('mongoose');

const facultyschema = new mongoose.Schema({
    fid:{
      type : String,
      required : true
    },
    name: {
      type : String,
      required : true
    },
    section:{
        type: Array,
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

const Faculty = mongoose.model('Faculty', facultyschema);
module.exports = Faculty;