//let MattMap = L.map('Map1id').setView([yourLat, yourLon], yourZoom)
let MattMap = L.map('Map1id').setView([29.993258,-90.098182], 11)
let MattDarkMap1 = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png')
let MattLightMap1 = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer/tile/{z}/{y}/{x}.png').addTo(MattMap)
let MattDarkMap2 = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}')

let MattBasemaps = {
  'Grey basemap': MattDarkMap1,
  'Light basemap': MattLightMap1,
  'Dark basemap': MattDarkMap2
}

L.control.layers(MattBasemaps).addTo(MattMap)
var greenIcon = L.icon({
    iconUrl: 'police.png',
    iconSize:     [95, 95], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
L.marker([29.928687,-89.719441], {icon: greenIcon}).addTo(MattMap);
L.marker([29.928687,-89.719441], {icon: greenIcon}).addTo(MattMap).bindPopup("This Map Displays the New Orleans Police Department's Districts.");

L.control.layers(MattBasemaps).addTo(MattMap)
var greenIcon1 = L.icon({
    iconUrl: 'police1.png',
    iconSize:     [50, 50], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
L.marker([29.993258,-90.098182], {icon: greenIcon1}).addTo(MattMap);
L.marker([29.993258,-90.098182], {icon: greenIcon1}).addTo(MattMap).bindPopup("This will take you to my portfolio.<br> https://marsen3.github.io");


MattGeojsonStyle = function (feature){
  let zone = feature.properties.district
  let grave = 'black'
  if (zone == '1') {grave = '#7B241C' }
  if (zone == '2') {grave = '#633974'}
  if (zone == '3') {grave = '#1A5276'}
  if (zone == '4') {grave = '#196F3D'}
  if (zone == '5') {grave = '#9A7D0A'}
  if (zone == '6') {grave = '#F9E79F'}
  if (zone == '7') {grave = '#F1948A'}
  if (zone == '8') {grave = '#2E4053'}

  let MattStyle = {
    color: grave,
    weight: 1,
}
return MattStyle
}

function MattPopup (feature, layer){
  let zone = feature.properties.district
  layer.bindPopup('district: ' + zone )
}
MattGeojsonOption = {
  style: MattGeojsonStyle,
  onEachFeature: MattPopup
}


L.geoJSON(MattGeojson, MattGeojsonOption).addTo(MattMap)
