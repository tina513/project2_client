'use strict';
//
const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

const onCreateFlight = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.createFlight(data)
  .done(ui.createFlightSuccess)
  .fail(ui.failure);
};

const onFutureFlight = (event) => {
  $('.search-flight-content').text('');
  $('.future-flight-content').text('');
  $('.past-flight-content').text('');
  event.preventDefault();
  api.getFlight()
  .done(ui.getFutureFlightSuccess)
  .fail(ui.failure);
};

const onPastFlight = (event) => {
  $('.search-flight-content').text('');
  $('.future-flight-content').text('');
  $('.past-flight-content').text('');
  event.preventDefault();
  api.getFlight()
  .done(ui.getPastFlightSuccess)
  .fail(ui.failure);
};

const onEditFlight = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  console.log(data);
  api.updateFlight(data)
  .done(ui.updateFlightsuccess)
  .fail(ui.failure);
};

const onDeleteFlight = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  //console.log(data);
  api.deleteFlight(data)
  .done(ui.deleteSuccess)
  .fail(ui.failure);
};

const onSearchFlight = (event) => {
  $('.search-flight-content').text('');
  $('.future-flight-content').text('');
  $('.past-flight-content').text('');
  event.preventDefault();
  let data = getFormFields(event.target);
  console.log(data);
  api.searchFlight(data)
  .done(ui.searchSuccess)
  .fail(ui.failure);
};

// const onAddTrip = (event) => {
//   // event.preventDefault();
//   let flightId = $('#trip-flight-id').val();
//   console.log(flightId);
//   // let data = getFormFields(event.target);
//   // console.log(data);
//   // api.addFlight(app.user.id, data.trip.flight_id)
//   // .done(ui.addTripSuccess)
//   // .fail(ui.failure);
// };



const addHandlers = () => {
  $('#flight-info').on('submit', onCreateFlight);
  $('#future-flight').on('click', onFutureFlight);
  $('#past-flight').on('click', onPastFlight);
  $('#edit-flight-content').on('submit', onEditFlight);
  $('#delete-flight').on('submit', onDeleteFlight);
  $('#search-flight').on('submit', onSearchFlight);
};

module.exports = {
  addHandlers,
};
