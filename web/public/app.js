const API_URL = 'http://localhost:5000/api';
const MQTT_URL = 'http://localhost:5001/sendcommand';

//login function
$('#login').on('click', function() {
  const u = $('#u_name').val();
  const p = $('#u_pass').val();
  var login = 0;
  $.get(`${API_URL}/users`)
.then(response => {
response.forEach(user => {
if ((user.name==String(u))&&(user.password==String(p))){

    login = 1;}
});
if (login == 1) {
  alert('success');
location.href = '/home';
}
else {
alert('User not found. Sign up!!');
location.href = '/register';
}
})
alert(welcome);
});
//Displaying the User! (Display Users)
//GET function will get executed when the URL is requested!
$.get(`${API_URL}/users`)
.then(response => {
  response.forEach(user => {
    $('#users tbody').append(`
      <tr>
        <td>${user.name}</td>
        <td>${user.age}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
        
      </tr>`
    );
  });
})
.catch(error => {
  console.error(`Error: ${error}`);
});


$('#add-user1').on('click', function() {
  const name = $('#name').val();
  const age = $('#age').val();
  const city = $('#city').val();
  const phone = $('#phone').val();
  const email = $('#email').val();
  const organization = $('#organization').val();
  const job = $('#job').val();
  const password = $('#password').val(); 
  const v_name = $('#v_name').val();
  const v_type = $('#v_type').val();
  const v_number = $('#v_number').val();
  const v_insurance = $('#v_insurance').val();
  const body1 = {
    name,
    age,
    city,
    phone,
    email,
    organization,
    job,
    password
  };
  const body2 = {
    name,
    v_name,
    v_type,
    v_number,
    v_insurance
  };
//When Save is clicked, POST function gets executed (Users).
  $.post(`${API_URL}/users`, body1) 
  $.post(`${API_URL}/vehicles`, body2) 
  .then(response => {
    alert("Success")
  })
 
  .catch(error => {
    console.error(`Error: ${error}`);
  });
});



//Displaying the Vehicle! (Display Vehicles)
//GET function will get executed when the URL is requested!
$.get(`${API_URL}/vehicles`)
.then(response => {
  response.forEach(vehicle => {
    $('#vehicles tbody').append(`
      <tr>
        
        <td>${vehicle.v_name}</td>
        <td>${vehicle.v_number}</td>
        <td>${vehicle.v_type}</td>
        <td>${vehicle.v_insurance}</td>
      </tr>`
    );
  });
})
//https://maps.google.com/?q=<lat>,<long>
.catch(error => {
  console.error(`Error: ${error}`);
});

$.get(`${API_URL}/spots`)
.then(response => {
  response.forEach(spots => {

    $('#spots tbody').append(`
      <tr>
        
        <td>${spots.s_id}</td>
        <td>${spots.s_name}</td>
        <td>${spots.s_location_lat}</td>
        <td>${spots.s_location_long}</td>
        <td ><a href="https://www.google.com/maps/dir/?api=1&destination=${spots.s_location_lat+(",")+spots.s_location_long}&travelmode=driving">${("Navigate to  ")+spots.s_name}</a></td>
      </tr>`
    );
  });
})
.catch(error => {
  console.error(`Error: ${error}`);
});
//When Save is clicked, POST function gets executed (Vehicles).

$('#add-spots').on('click', function() {
  const s_id = $('#s_id').val();
  const s_name = $('#s_name').val();
  const s_location_lat = $('#s_location_lat').val();
  const s_location_long = $('#s_location_long').val();
  const body3 = {
    s_id,
    s_name,
    s_location_lat,
    s_location_long
  };
  
//When Save is clicked, POST function gets executed (Users).
  $.post(`${API_URL}/spots`, body3) 
  .then(response => {
    alert("Success")
  })
 
  .catch(error => {
    console.error(`Error: ${error}`);
  });
});
//Seperate block of code for sending manual commands!
$('#sendcommand').on('click', function() {
  const userID = $('#userID').val();
  const command = $('#command').val();
  $.post(MQTT_URL, { userID, command })
  .then(response => {
  location.href = '/users-list.html';
   })
});