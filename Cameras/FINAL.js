//let MattMap = L.map('Map1id').setView([yourLat, yourLon], yourZoom)
let MattMap = L.map('Map1id').setView([29.993258,-90.098182], 12)
let MattLightMap1 = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer/tile/{z}/{y}/{x}.png').addTo(MattMap)
let MattDarkMap1 = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png')
let MattDarkMap2 = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}')

let MattBasemaps = {
  'Light basemap': MattLightMap1,
  'Grey basemap': MattDarkMap1,
  'Dark basemap': MattDarkMap2
}

L.control.layers(MattBasemaps).addTo(MattMap)

MattGeojsonStyle = function (feature){
  let speed = feature.properties.triggerspeed
  let grave = 'black'
  if (speed > 35) {grave = 'red' }
  let MattStyle = {
    color: grave,
    weight: 1,
}
return MattStyle
}

function MattPopup (feature, layer){
  let speed = feature.properties.triggerspeed
  let parkname = feature.properties.location
  layer.bindPopup('triggerspeed: ' + speed + '<br>location: ' + parkname)
}
MattGeojsonOption = {
  style: MattGeojsonStyle,
  onEachFeature: MattPopup
}

L.geoJSON(MattGeojson, MattGeojsonOption).addTo(MattMap)
