const mongoose = require('mongoose');

const sectionschema = new mongoose.Schema({
    sid:{
      type : String,
      required : true
    },
    fid: {
      type : String,
      required : true
    },
    cid:{
        type:String,
        required : true
    }
  });

const Section = mongoose.model('Section', sectionschema);
module.exports = Section;