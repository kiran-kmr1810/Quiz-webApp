const mongoose = require('mongoose');

const subjectschema = new mongoose.Schema({
    code:{
      type : String,
      required : true
    },
    name: {
      type : String,
      required : true
    }
  });

const Subject = mongoose.model('Subject', subjectschema);
module.exports = Subject;