var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username : {
  	type : String,
  	required : true,
  	unique : true
  },
  password : {
  	type : String,
  	required : true
  },
  email : {
  	type : String,
  	required : true,
  	unique : true
  },
  admin : Boolean,
  //location: String // Change to use gps info
  questions : [{ type: Schema.Types.ObjectId, ref: 'Question' }]
},
{
  timestamps : true //automatically adds createdAt/updatedAt fields
});

//var Question = mongoose.model('Question', questionSchema);
var User = mongoose.model('User', userSchema);

module.exports = User;
