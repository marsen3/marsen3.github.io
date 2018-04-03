//let MattMap = L.map('Map1id').setView([yourLat, yourLon], yourZoom)
let MattMap = L.map('Map1id').setView([29.993258,-90.098182], 12)
let basemap = 'https://server.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer/tile/{z}/{y}/{x}.png'


L.tileLayer(basemap).addTo(MattMap)


let marker = L.marker([29.993258,-90.098182]).addTo(MattMap)

var pointA = new L.LatLng(29.963714, -90.038818);
var pointB = new L.LatLng(29.967952, -90.013798);
var pointList = [pointA, pointB];

var firstpolyline = new L.Polyline(pointList, {
    color: 'blue',
    weight: 3,
    opacity: 0.5,
    smoothFactor: 1
});
firstpolyline.addTo(MattMap);


let polygon = L.polygon([
  [29.991932, -90.085530],
  [29.977658, -90.086388],
  [29.984944, -90.071453]
]).addTo(MattMap);

polygon.bindPopup('Fairgrounds')
marker.bindPopup('City Park')

mymap.on('click', function (event) {
  console.log('You clicked the map at ' + event.latlng)
})
