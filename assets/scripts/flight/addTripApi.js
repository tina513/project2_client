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

const addWeather = (arrival) => {
  return $.ajax({
    url: app.weather+ arrival + "')&format=json",
    method: "GET",
   });
};


// query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22chicago%2C%20il%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys

// $.ajax({
//   url:'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22chicago%2C%20il%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys', success: function(json_weather){
//
//
// $('<h1>').text(json_weather.query.results.channel.title ).appendTo('#main');
// $('<h2>').text('Date: ').appendTo('#main');
// $('#main').append(json_weather.query.results.channel.item.condition.date);
// $('<h2>').text('Temperature: ').appendTo('#main');
// $('#main').append(json_weather.query.results.channel.item.condition.temp);
// $('<h2>').text('Wind Chill: ').appendTo('#main');
// $('#main').append(json_weather.query.results.channel.wind.chill);
//
//   }
//
// });

// $.ajax({
//    url: "http://weather.yahooapis.com/forecastjson?w=2295424",
//    dataType: "json",
//    success: function(data) {
//       console.log( data.forecast[0].day );
//       }
//  });


module.exports = {
  addFlight,
  addWeather,
};
