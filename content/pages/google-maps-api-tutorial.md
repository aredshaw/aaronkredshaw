---
title: "Google Maps API Tutorial"
date: 2020-07-16T17:53:56-07:00
draft: true
---

Description: The purpose of this API is to insert a Google Map into your own website. When someone first visits your page, it will ask to have permission to use their location. This is so the map can be centered on their location from the start.

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Google Maps API</title>

<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDCXAJzoxglDd6weEXHw0Gn-bvEY-mmDeM&callback=initMap"></script>

<script>
if("geolocation" in navigator) {
navigator.geolocation.getCurrentPosition(function(position) {
var latlng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
var myOptions = {
zoom: 8,
center: latlng,
mapTypeId: google.maps.MapTypeId.TERRAIN,
disableDefaultUI: true
}
var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
});
} else {
var para = document.createElement('p');
para.textContent = 'Argh, no geolocation!';
document.body.appendChild(para);
}
</script>

<script async defer
src="AIzaSyDCXAJzoxglDd6weEXHw0Gn-bvEY-mmDeM&callback=initMap">
</script>

<style>
#map_canvas {
width: 600px;
height: 600px;
}
</style>
</head>
<body>
<h1>Google Maps API</h1>
<div id="map_canvas"></div>
</body>
</html>

How It's Done
The Google Maps API is one of the easiest to use since it has very few parameters. The way it is set up it will use your own location to determine what part of the world to show you. The basic code is as follows:

```html
<!DOCTYPE html>
<html>
<head>
<meta charset=”utf-8″>
<title>Google Maps example customized</title>

<script type=”text/javascript” src=”https://maps.googleapis.com/maps/api/js?key={Your API Key Here}&callback=initMap”></script>

<script>
if(“geolocation” in navigator) {
navigator.geolocation.getCurrentPosition(function(position) {
var latlng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
var myOptions = {
zoom: 8,
center: latlng,
mapTypeId: google.maps.MapTypeId.TERRAIN,
disableDefaultUI: true
}
var map = new google.maps.Map(document.getElementById(“map_canvas”), myOptions);
});
} else {
var para = document.createElement(‘p’);
para.textContent = ‘Argh, no geolocation!’;
document.body.appendChild(para);
}
</script>

<script async defer
src=”{Your API Key Here}&callback=initMap”>
</script>

<style>
#map_canvas {
width: 600px;
height: 600px;
}
</style>
</head>
<body>
<h1>Customized Google Maps Example</h1>
<div id=”map_canvas”></div>
</body>
</html>
```

The only part of the above HTML that must be changed is {Your API Key Here}. To get your API key from Google, go to [https://cloud.google.com/console/google/maps-apis/overview](https://cloud.google.com/console/google/maps-apis/overview) and select “Select a Project.” You will chose “Maps JavaScript API.” Once you done this, you will receive an API key. Copy this and save it in Notepad. 

One other issue I ran into is that recently Google started requiring a credit card on file in order to give you access to this API. When I did this, they assured me that the main reason was to make sure I was a human being and not a robot. They also stated that the service was free unless many thousands of people used the map on my site, in which case they would not charge my card without first asking me.

Now go back into the code you copied and replace {Your API Key Here} with the API key they gave you. Anything in red can also be changed, but the API key is all that is required.

Other parts of the code that you can change (optional):

<html>
    <tr>
        <td>Title</td>
        <td>This is the title of the webpage, usually in the tab of your browser.</td>
    </tr>
    <tr>
        <td>Zoom</td>
        <td>Range (1-20 )<br>
How close you are on the map. A small number means you are farther away, seeing the location from a distance. A larger number means you are up close. For some areas very close maps, such as range 15-20 may not be available because the Google does not have that information.</td>
    </tr>
    <tr>
        <td>Width</td>
        <td>The width of your map on your website.</td>
    </tr>
    <tr>
        <td>Height</td>
        <td>The height of your map on your website.</td>
    </tr>
    <tr>
        <td>H1</td>
        <td>Between these tags you should put the title you want at the top of your page.</td>
    </tr>
</html>

That’s all. Now anyone can view their location from your website.