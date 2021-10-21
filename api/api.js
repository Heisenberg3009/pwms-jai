//This is the Database API

//Database Connection Established--
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Tulsi:chloe143@cluster0.lobgv.mongodb.net/Team_Goblin', {useNewUrlParser: true, useUnifiedTopology: true });
//Get collection schema--
const User = require('./models/usersmodel'); 
const Vehicle = require('./models/vehiclemodel');
const Spots = require('./models/parkingmodel');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

const port = 5000;

app.get('/api/test', (req, res) => {
  res.send('The API is working!');
});

app.get('/api/users', (req, res) => {
    User.find({}, (err, Users) => {
        return err
        ?res.send(err)
        :res.send(Users);
    });
  });

app.post('/api/users', (req, res) => {
    const { name, age, city, phone, email, organization, job, password} = req.body;
    const newUser = new User({
        name,
        age,
        city,
        phone,
        email,
        organization,
        job,
        password
    });
    newUser.save(err => {
      return err
        ? res.send(err)
        : res.send('successfully added User and Data! Hurray!');
    });
  });


app.get('/api/vehicles', (req, res) => {
    Vehicle.find({}, (err, vehicles) => {
        return err
        ?res.send(err)
        :res.send(vehicles);
    });
  });
  app.get('/api/spots', (req, res) => {
 Spots.find({}, (err, users) => {
        return err
        ?res.send(err)
        :res.send(users);
    });
  });
  app.post('/api/spots', (req, res) => {
    const { s_id,
     s_name,
      s_location_lat,
      s_location_long
     } = req.body;
    const newSpots = new Spots({
      s_id,
      s_name,
       s_location_lat,
       s_location_long
    });
    newSpots.save(err => {
      return err
        ? res.send(err)
        : res.send('successfully added Spots Data! Hurray!');
    });
  });
  app.post('/api/vehicles', (req, res) => {
    const {  name,
      v_name,
      v_type,
     v_number,
      v_insurance
     } = req.body;
    const newVehicle = new Vehicle({
      name,
      v_name,
      v_type,
     v_number,
      v_insurance
    });
    newVehicle.save(err => {
      return err
        ? res.send(err)
        : res.send('successfully added Vehicles Data! Hurray!');
    });
  });
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});