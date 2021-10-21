const mongoose = require('mongoose');

//Schema representing the Vehicles document in the DB.
module.exports = mongoose.model('Parking', new mongoose.Schema({
  //slotnumber of the space
  //takes the id of the vehicle parked
  s_id: Number,
  s_name:String,
  s_location_lat: String,
  s_location_long: String
}, { collection : 'Parking' }));