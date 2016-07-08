'use strict';

const app = require('../app.js');

const addFlight = (flightId) => {
  return $.ajax({
    url: app.host + '/trips',
    method: "POST",
    data: {
      trip: {
        // user_id: userId,
        flight_id: flightId,
      },
    },
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
   });
};

const addWeather = (arrival) => {
  return $.ajax({
    url: app.weather+ arrival + "')&format=json",
    method: "GET",
   });
};

module.exports = {
  addFlight,
  addWeather,
};
