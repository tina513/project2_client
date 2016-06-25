'use strict';

const app = require('../app.js');

let tripArr = [];

const failure = (error) => {
  console.error(error);
};

const createFlightSuccess = (data) => {
  console.log(app.user);
};

const getFlightSuccess = (data) => {
  let tripListing = require('../templates/trip.handlebars');
  let userId = app.user.id;
  tripArr = data.trips;
  // app.user = data.user;
  // console.log(tripArr);
  // console.log(tripArr[6].user.id);
  // console.log(userId);
  for (let i = 0; i < tripArr.length; i++) {
    let each = tripArr[i];
    if (each.user.id == userId) {
      $('.past-flight-content').append(tripListing(each.flight));
      // console.log(each.flight);
    }
  }
};

const updateFlightsuccess = () => {
  console.log("success!");
}

const deleteSuccess = () => {
  console.log("success!");
}

const returnTripsArr = () => {
  return tripArr;
}

module.exports = {
  failure,
  createFlightSuccess,
  getFlightSuccess,
  updateFlightsuccess,
  deleteSuccess,
  returnTripsArr,
};
