const mongoose = require('mongoose');

//Schema representing the Vehicles document in the DB.
module.exports = mongoose.model('Warehouse', new mongoose.Schema({
  warespaceid: Number,
  stockingid: Number,
  location: Array
}, { collection : 'Warehouse' }));