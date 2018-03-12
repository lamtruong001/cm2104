var mymap = L.map('mapid').setView([0, 0], 1);

var Hydda_Base = L.tileLayer('https://{s}.tile.openstreetmap.se/hydda/base/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: 'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

Hydda_Base.addTo(mymap);

//when the button on is clicked
$('#shakey').click(function() {
 console.log("getting quakes");
 $.getJSON("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson", function(result) {
 console.log(result)
 result.features.forEach(function(quake) {
 var lng = quake.geometry.coordinates[0];
 var lat = quake.geometry.coordinates[1];
 var mag = parseFloat(quake.properties.mag);

 var circle = L.circle ([lat, lng], mag * 10000, {
   color: 'red',
   opacity: 0,
   fillcolor: 'red',
   fillopacity: 0.8

 })

 circle.addTo(mymap);
 });

 });
});
