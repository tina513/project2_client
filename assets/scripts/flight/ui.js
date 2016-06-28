'use strict';

const app = require('../app.js');
const addTripApi = require('./addTripApi.js');

let tripArr = [];

const failure = (error) => {
  console.error(error);
};

const createFlightSuccess = (data) => {
  console.log(app.user);
};

const getFutureFlightSuccess = (data) => {
  let tripListing = require('../templates/trip.handlebars');
  let userId = app.user.id;
  tripArr = data.trips;
  for (let i = 0; i < tripArr.length; i++) {
    let each = tripArr[i];
    let departureDate = new Date(each.flight.departure_date);
    let today = new Date();
    if ((each.user.id === userId) && (departureDate >= today)) {
      $('.future-flight-content').append(tripListing(each.flight));
      $('#weather-' + each.flight.id.toString()).on('click', function(){
        addTripApi.addWeather(each.flight.arrival)
        .done(function(data){
          $('.weather-container-'+ each.flight.id.toString()).text('');
          $('.weather-container-'+ each.flight.id.toString()).append(data);
        })
        .fail(failure);
      });

      // addTripApi.addWeather(each.flight.arrival)
      // .done(weatherSuccess)
      // .fail(failure);
    }
  }
};

const getPastFlightSuccess = (data) => {
  let tripListing = require('../templates/trip.handlebars');
  let userId = app.user.id;
  tripArr = data.trips;
  for (let i = 0; i < tripArr.length; i++) {
    let each = tripArr[i];
    let departureDate = new Date(each.flight.departure_date);
    let today = new Date();
    if ((each.user.id === userId) && (departureDate < today)) {
      $('.past-flight-content').append(tripListing(each.flight));
      $('#weather-' + each.flight.id.toString()).on('click', function(){
        addTripApi.addWeather(each.flight.arrival)
        .done(function(data){
          $('.weather-container-'+ each.flight.id.toString()).text('');
          $('.weather-container-'+ each.flight.id.toString()).append(data);
        })
        .fail(failure);
      });
    }
  }
};

const updateFlightsuccess = () => {
  console.log("success!");
};

const deleteSuccess = () => {
  console.log("success!");
};

const searchSuccess = (data) => {
  let searchFlightListing = require('../templates/searchFlight.handlebars');
  let typeFlightNumber = $('#search-flight-number').val();
  let flightArr = data.flights;
  for (let i = 0; i < flightArr.length; i++) {
    let each = flightArr[i];
    if (each.flight_number === typeFlightNumber){
      $('.search-flight-content').append(searchFlightListing(each));
      $('#add-trip-' + each.id.toString()).on('click', function(){
        let flightId = $('#trip-flight-'+each.id.toString()).val();
        addTripApi.addFlight(app.user.id, flightId)
        .done(createFlightSuccess)
        .fail(failure);
      });
    }
  }
};

// const weatherSuccess = (data) => {
//   console.log(data);
//   $('.weather-container-'+ each.flight.id.toString()).text('');
//   $('.weather-container-'+ each.flight.id.toString()).append(data);
// };

const returnTripsArr = () => {
  return tripArr;
};

module.exports = {
  failure,
  createFlightSuccess,
  getFutureFlightSuccess,
  getPastFlightSuccess,
  updateFlightsuccess,
  deleteSuccess,
  searchSuccess,
  // weatherSuccess,
  returnTripsArr,
};
