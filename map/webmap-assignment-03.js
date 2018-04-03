//let MattMap = L.map('Map1id').setView([yourLat, yourLon], yourZoom)
let MattMap = L.map('Map1id').setView([29.993258,-90.098182], 12)
let basemap = 'https://server.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer/tile/{z}/{y}/{x}.png'


L.tileLayer(basemap).addTo(MattMap)

var greenIcon = L.icon({
    iconUrl: 'Music-Herald-Trumpet-icon.png',
    iconSize:     [38, 95], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
L.marker([29.993258,-90.098182], {icon: greenIcon}).addTo(MattMap);
L.marker([29.993258,-90.098182], {icon: greenIcon}).addTo(MattMap).bindPopup("This Trumpet Represents Jazz Music.");

let myCoords = [
  [29.991932, -90.085530],
  [29.977658, -90.086388],
  [29.984944, -90.071453]
]


let myStyle = {
  color: 'black',
  fillColor: 'green'
}

let mypolygon = L.polygon(myCoords, myStyle).addTo(MattMap)
