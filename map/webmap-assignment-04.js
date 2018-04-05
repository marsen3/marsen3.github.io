//let MattMap = L.map('Map1id').setView([yourLat, yourLon], yourZoom)
let MattMap = L.map('Map1id').setView([29.993258,-90.098182], 12)
let basemap = 'https://server.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer/tile/{z}/{y}/{x}.png'
L.tileLayer(basemap).addTo(MattMap)

MattGeojsonStyle = function (feature){
  let zone = feature.properties.Zone
  let grave = 'black'
  if (zone == '7N') {grave = 'red' }
  let MattStyle = {
    color: grave,
    weight: 1,
}
return MattStyle
}

function MattPopup (feature, layer){
  let zone = feature.properties.Zone
  let number = feature.properties.District
  layer.bindPopup('Zone: ' + zone + '<br>District: ' + number)
}
MattGeojsonOption = {
  style: MattGeojsonStyle,
  onEachFeature: MattPopup
}

L.geoJSON(MattGeojson, MattGeojsonOption).addTo(MattMap)
