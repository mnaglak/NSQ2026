


//Define map start up options
var mapOptions = {
 center: [37.110, 25.3715], //set center Lat/Long of your area of interest
 zoom: 18, //set initial zoom level
 maxZoom : 28,  //set max zoom level
 }

var map = new L.map('map', mapOptions);
//Example of an externally called basemap
var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            maxNativeZoom: 17,
            maxZoom: 20,
            attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'});
Esri_WorldImagery.addTo(map);

var gridImported = L.geoJSON(json_NQP2026_SurveyGridportara_survey_grid_1, {onEachFeature: popUpGrid})
gridImported.addTo(map)

function popUpGrid(f,l) {
        var out = [];
        var myImage;
        if (f.properties) {
            out.push('<b><u>' + f.properties.GridSquare + '</u></b>');
            

            l.bindPopup(out.join("<br/>"), { closeOnClick: true });


        }
    }