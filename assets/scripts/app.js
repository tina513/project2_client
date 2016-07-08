'use strict';

const app = {
  host: 'https://tripcare.herokuapp.com',
  // host: 'http://localhost:3000',
  weather: "https://query.yahooapis.com/v1/public/yql?q=select item from weather.forecast where woeid in (select woeid from geo.places(1) where text='"
};

module.exports = app;
