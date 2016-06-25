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

const onPastFlight = (event) => {
  event.preventDefault();
  api.getFlight()
  .done(ui.getFlightSuccess)
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
  event.preventDefault();
  let data = getFormFields(event.target);
  api.searchFlight(data)
  .done(ui.searchSuccess)
  .fail(ui.failure);
};

const addHandlers = () => {
  $('#flight-info').on('submit', onCreateFlight);
  $('#past-flight').on('click', onPastFlight);
  $('#edit-flight-content').on('submit', onEditFlight);
  $('#delete-flight').on('submit', onDeleteFlight);
  $('#search-flight').on('submit', onSearchFlight)
};

module.exports = {
  addHandlers,
};
