const mongoose = require('mongoose');

//Schema representing the document in the DB.
module.exports = mongoose.model('Users', new mongoose.Schema({
  name: String,
  age: String,
  city: String,
  phone: String,
  email:String,
  organization:String,
  job:String,
  password: String,
 
}, { collection : 'Users' }));