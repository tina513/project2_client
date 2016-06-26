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

module.exports = {
  addFlight,
};
