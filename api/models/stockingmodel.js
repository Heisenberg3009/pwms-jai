const mongoose = require('mongoose');

//Schema representing the Vehicles document in the DB.
module.exports = mongoose.model('Stockings', new mongoose.Schema({
  //stockingid is different from id in Parking, users and Vehicle
  stockingid: Number,
  stocktype: String,
  stockweight: Number
}, { collection : 'Stockings' }));