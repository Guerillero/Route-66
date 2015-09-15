  var map = L.map('map', {minZoom: 5, zoom: 5, center: L.latLng(38, -102)});
  
  L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(map);
  
  // Now that the basemap is done, add data
  
  function addPoints(JSONs, iconURI, lang){
    $.getJSON(JSONs, function(data){
      var Icon = L.icon({iconUrl: iconURI, iconSize: [25,25]});
      L.geoJson(data, {
        pointToLayer: function(feature, cords){
          var Marker = L.marker(cords, {icon: Icon});
          Marker.bindPopup('<center>' + feature.properties.title + '<br><a href="http://' + lang +'.wikipedia.org/wiki/' + feature.properties.title + '" target="_blank">Link</a></center>');
          return Marker;
        }
      }).addTo(map);
    });
  }
    
  addPoints("/Route66/Route66.json", '/Route66/shield.png', 'en');
