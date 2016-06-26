'use strict';

const app = require('../app.js');
const ui = require('./ui.js');

const createFlight = (data) => {
  return $.ajax({
    url: app.host + '/flights',
    method: "POST",
    data: data,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const getFlight = () => {
  return $.ajax({
      url: app.host + `/trips`,
      method: 'GET',
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
    });
};

const updateFlight = (data) => {
  let arr = ui.returnTripsArr();
  for (let i = 0; i < arr.length; i++) {
    let trip = arr[i];
    if (trip.flight.flight_number === data.flights.flight_number){
      return $.ajax({
        url: app.host + `/flights/` + trip.flight.id,
        method: 'PATCH',
        data: data,
        headers: {
          Authorization: 'Token token=' + app.user.token,
        },
      });
    }
  }
};

const deleteFlight = (data) => {
  let arr = ui.returnTripsArr();
  for (let i = 0; i < arr.length; i++) {
    let trip = arr[i];
    if ((trip.flight.flight_number === data.flights.flight_number) && (trip.user.id === app.user.id)) {
      // console.log(trip.id);
      return $.ajax({
        url: app.host + '/trips/' + trip.id,
        method: "DELETE",
        headers: {
          Authorization: 'Token token=' + app.user.token,
        },
      });
    }
  }
};

const searchFlight = (data) => {
  return $.ajax({
      url: app.host + '/flights',
      method: 'GET',
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
    });
};

module.exports = {
  createFlight,
  getFlight,
  updateFlight,
  deleteFlight,
  searchFlight,
};
