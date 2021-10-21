const mongoose = require('mongoose');

//Schema representing the Vehicles document in the DB.
module.exports = mongoose.model('Vehicles', new mongoose.Schema({
  name:String,
  v_name: String,
  v_type: String,
 v_number: Number,
  v_insurance: Number
}, { collection : 'Vehicles' }));