


//Define map start up options
var mapOptions = {
 tap: false,
 center: [37.10556, 25.37], //set center Lat/Long of your area of interest
 zoom: 16, //set initial zoom level
 maxZoom : 20,  //set max zoom level
 minZoom: 10,
 touchZoom: true,

 }

var map = new L.map('map', mapOptions);
//Example of an externally called basemap
var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            maxNativeZoom: 17,
            maxZoom: 20,
            attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'});
