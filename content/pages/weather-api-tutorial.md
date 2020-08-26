---
title: "Weather API Tutorial"
date: 2020-07-16T17:11:19-07:00
draft: true
---

Description: Here is a weather API that can give you your location, current temperature, wind speed, humidity, pressure, low temperature and high temperature. To see my other API’s, click on the appropriate link on the menu.

<html>
<meta charset="UTF-8">
  <head>
      <title>Weather API</title>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
  </head>
<body>
  <h1>Current Weather Conditions in San Jose, California</h2>

<script>
    
  var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.openweathermap.org/data/2.5/weather?zip=95050&appid=3a155137ad9e4c7c3b5ac6abd7957c7a&units=imperial",
  "method": "GET",
}

$.ajax(settings).done(function (response) {
  console.log(response);
  
  var content = response.coord.lon;
  $("#lon").append(content);
  
});

$.ajax(settings).done(function (response) {
  console.log(response);
  
  var content = response.coord.lat;
  $("#lat").append(content);
  
});

$.ajax(settings).done(function (response) {
  console.log(response);
  
  var content = response.main.temp;
  $("#mainTemp").append(content+ " F");
  
});

$.ajax(settings).done(function (response) {
  console.log(response);
  
  var content = response.wind.speed;
  $("#windSpeed").append(content+ " MPH") ;
  
});

$.ajax(settings).done(function (response) {
  console.log(response);
  
  var content = response.main.humidity;
  $("#humidity").append(content+ "%") ;
  
});

$.ajax(settings).done(function (response) {
  console.log(response);
  
  var content = response.main.pressure;
  $("#pressure").append(content+ " mb");
  
});



$.ajax(settings).done(function (response) {
  console.log(response);
  
  var content = response.main.temp_min;
  $("#tempMin").append(content+" F") ;
  
});

$.ajax(settings).done(function (response) {
  console.log(response);
  
  var content = response.main.temp_max;
  $("#tempMax").append(content+ "F") ;
  
});

</script>
    
<div id = "lon">Longitude:  </div> 

<div id = "lat">Latitude:  </div> 

<div id = "mainTemp">Temperature:  </div> 

<div id = "windSpeed">Wind Speed: </div>
    
<div id = "humidity">Humidity: </div>

<div id = "pressure">Pressure: </div>

<div id = "tempMin">Low Temperature: </div>

<div id = "tempMax">High Temperature: </div>


</body>
</html>

## How It's Done

### Authentication

1. Get your API key at https://home.openweathermap.org/users/sign_up. Once you sign up they will give you the code.
2. Next, visit https://openweathermap.org/api, and under “Current weather data,” click on “API doc.” Here you will find all the API calls and parameters for this API.

For your html page, start with this:

### Adding your HTML code

1. Begin with this HTML at the top of your page.
2. Change what is between the h1 tags to the name of the city you want to use.

```html
<html>
<meta charset=”UTF-8″>
<head>
<title>Weather API</title>
<script src=”https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js”></script>
</head>
<body>
<h1>Current Weather Conditions in San Jose, California</h1>
```

### Adding JavaScript

3. Put a script tag and then this code.
4. Replace the red text (below) with the zip code for your city and add the API Key that was given to you.

```javascript
var settings = {
“async”: true,
“crossDomain”: true,
“url”: “https://api.openweathermap.org/data/2.5/weather?zip={Zip Code}&appid={API Key}&units=imperial”,
“method”: “GET”,
}
```

5. Add the end script tag.

### Back to HTML

Add the HTML below. This makes it possible to display the output to the screen.

```javascript
$.ajax(settings).done(function (response) {
console.log(response);

var content = response.main.temp;
$(“#mainTemp“).append(content);

});
```

The parameters can be inserted into the line: 

```javascript
var content = response.main.temp;
```

6. Replace main.temp with the parameter you want. For each additional parameter you want to add, copy the code above and paste it below with another parameter. (See the example after this chart.)

<table>
    <tr>
        <th>Parameters</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>main.temp</td>
        <td>This is the current temperature.</td>
    </tr>
    <tr>
        <td>main.pressure</td>
        <td>The barometric pressure in millibars (mbar).</td>
    </tr>
    <tr>
        <td>main.humidity</td>
        <td>The current humidity.</td>
    </tr>
    <tr>
        <td>main.temp_min</td>
        <td>The lowest temperature it will be today (12:01 am-11:59 pm).</td>
    </tr>
    <tr>
        <td>main.temp_max</td>
        <td>The highest temperature it will be today (12:01 am-11:59 pm).</td>
    </tr>
    <tr>
        <td>wind.speed</td>
        <td>Wind speed in miles per hour.</td>
    </tr>
    <tr>
        <td>coord.lat</td>
        <td>Geographical lattitude.</td>
    </tr>
    <tr>
        <td>coord.lon</td>
        <td>Geographical longitude.</td>
    </tr>
</table>

7. Now replace #mainTemp with something unique for each parameter.

## Example

If you do this several times, one for each parameter, it may look something like this:

```javascript
$.ajax(settings).done(function (response) {
console.log(response);

var content = response.main.temp;
$(“#mainTemp”).append(content);

});

$.ajax(settings).done(function (response) {
console.log(response);

var content = response.wind.speed;
$(“#windSpeed”).append(content) ;

});

$.ajax(settings).done(function (response) {
console.log(response);

var content = response.main.humidity;
$(“#humidity”).append(content) ;

});


$.ajax(settings).done(function (response) {
console.log(response);

var content = response.main.pressure;
$(“#pressure”).append(content);

});
```

8. At the end of your parameter code, add the ending tag and now put in this piece of code:

```html
<div id = “mainTemp“>Temperature: </div>
```

You may have several of these lines where “mainTemp” is replaced by “windSpeed” or other labels you gave your parameters. Don’t forget to change Temperature to Wind Speed or High Temperature or whatever else you want to name the results so that it may look like this:

```html
<div id = “lon”>Longitude: </div>

<div id = “lat”>Latitude: </div>

<div id = “mainTemp”>Temperature: </div>

<div id = “windSpeed”>Wind Speed: </div>

<div id = “humidity”>Humidity: </div>

<div id = “pressure”>Pressure: </div>
```

9. End your page with this:

```html
</body>
</html>
```

## Finished product

When you are done, your code should look something like this:

```html
<html>
<meta charset=”UTF-8″>
<head>
<title>Weather API</title>
<script src=”https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js”></script>
</head>
<body>
<h1>Current Weather Conditions in San Jose, California</h2>

<script>

var settings = {
“async”: true,
“crossDomain”: true,
“url”: “https://api.openweathermap.org/data/2.5/weather?zip=95050&appid=3a155137ad9e4c7c3b5ac6abd7957c7a&units=imperial”,
“method”: “GET”,
}

$.ajax(settings).done(function (response) {
console.log(response);

var content = response.coord.lon;
$(“#lon“).append(content);

});

$.ajax(settings).done(function (response) {
console.log(response);

var content = response.coord.lat;
$(“#lat“).append(content);

});


$.ajax(settings).done(function (response) {
console.log(response);

var content = response.main.temp;
$(“#mainTemp“).append(content);

});

$.ajax(settings).done(function (response) {
console.log(response);

var content = response.wind.speed;
$(“#windSpeed“).append(content) ;

});

$.ajax(settings).done(function (response) {
console.log(response);

var content = response.main.humidity;
$(“#humidity“).append(content) ;

});


$.ajax(settings).done(function (response) {
console.log(response);

var content = response.main.pressure;
$(“#pressure“).append(content);

});

$.ajax(settings).done(function (response) {
console.log(response);

var content = response.main.temp_min;
$(“#tempMin“).append(content) ;

});

$.ajax(settings).done(function (response) {
console.log(response);

var content = response.main.temp_max;
$(“#tempMax“).append(content) ;

});

</script>

<div id = “lon“>Longitude: </div>

<div id = “lat“>Latitude: </div>

<div id = “mainTemp“>Temperature: </div>

<div id = “windSpeed“>Wind Speed: </div>

<div id = “humidity“>Humidity: </div>

<div id = “pressure“>Pressure: </div>

<div id = “tempMin“>Low Temperature: </div>

<div id = “tempMax“>High Temperature: </div>


</body>
</html>
```

And with that you have a nice part of your webpage that can tell the basic weather conditions wherever you are. Don’t forget to check out my other tutorials.