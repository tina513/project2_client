'use strict';

const app = require('../app.js');

const addFlight = (userId, flightId) => {
  return $.ajax({
    url: app.host + '/trips',
    method: "POST",
    data: {
      trip: {
        user_id: userId,
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
    url: app.weather+arrival+'&mode=html&units=imperial&APPID=90f3373b7762926edc47c34ffec2201a',
    method: "GET",
   });
};

module.exports = {
  addFlight,
  addWeather,
};
