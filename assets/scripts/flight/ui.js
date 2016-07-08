'use strict';

const app = require('../app.js');
const addTripApi = require('./addTripApi.js');

let tripArr = [];

const failure = (error) => {
  console.error(error);
};

const createFlightSuccess = (data) => {
  $('.input-field').val('');
  $('.search-flight-content').text('');
  $('.future-flight-content').text('');
  $('.past-flight-content').text('');
};

const getFutureFlightSuccess = (data) => {
  let tripListing = require('../templates/trip.handlebars');
  let weatherListing = require('../templates/weather.handlebars');
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
          $('.weather-container-'+ each.flight.id.toString()).append(weatherListing(data.query));
        })
        .fail(failure);
      });
    }
  }
};

const getPastFlightSuccess = (data) => {
  let tripListing = require('../templates/trip.handlebars');
  let weatherListing = require('../templates/weather.handlebars');
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
          $('.weather-container-'+ each.flight.id.toString()).append(weatherListing(data.query));
        })
        .fail(failure);
      });
    }
  }
};

const updateFlightsuccess = () => {
  console.log("success!");
  $('.input-field').val('');
};

const deleteSuccess = () => {
  console.log("success!");
  $('.input-field').val('');
  $('.search-flight-content').text('');
  $('.future-flight-content').text('');
  $('.past-flight-content').text('');
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
        addTripApi.addFlight(flightId)
        .done(createFlightSuccess)
        .fail(failure);
      });
    }
  }
};


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
  returnTripsArr,
};
