'use strict';

const app = {
  host: 'https://tripcare.herokuapp.com',
  weather: "https://query.yahooapis.com/v1/public/yql?q=select item from weather.forecast where woeid in (select woeid from geo.places(1) where text='"
};

module.exports = app;


// https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20location%3D%2233015%22&format=json
