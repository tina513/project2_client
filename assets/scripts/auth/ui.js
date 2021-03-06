'use strict';

const app = require('../app.js');
const signInApi = require('./signInApi.js');

const signUpSuccess = (data) => {
  let password = $('#sign-up-pw').val();
  signInApi.autoSignIn(data.user.email, password)
    .done(signInSuccess)
    .fail(failure);
};

const signInSuccess = (data) => {
  app.user = data.user;
  $('.signUp').hide();
  $('.signIn').hide();
  $('.user-info').show();
  $('.user-email').text(data.user.email);
  console.log('Success');
};

const changePasswordSuccess = (data) => {
  if (data) {
    console.log(data);
  } else {
    console.log('Success');
  }
};

const signOutSuccess = () => {
  $('.signUp').show();
  $('.signIn').show();
  $('.user-info').hide();
  $('.search-flight-content').text('');
  $('.future-flight-content').text('');
  $('.past-flight-content').text('');
  console.log('User signed out successfully');
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  failure,
};
