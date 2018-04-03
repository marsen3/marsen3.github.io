//let MattMap = L.map('Map1id').setView([yourLat, yourLon], yourZoom)
let MattMap = L.map('Map1id').setView([29.993258,-90.098182], 12)
let basemap = 'https://server.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer/tile/{z}/{y}/{x}.png'


L.tileLayer(basemap).addTo(MattMap)

var greenIcon = L.icon({
    iconUrl: 'Music-Herald-Trumpet-icon.png',
    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
L.marker([29.993258,-90.098182], {icon: greenIcon}).addTo(MattMap);
L.marker([29.993258,-90.098182], {icon: greenIcon}).addTo(MattMap).bindPopup("This Trumpet Represents Jazz Music.");
