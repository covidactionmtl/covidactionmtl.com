//Map stuff
var map = L.map('map').setView([45.495656,-73.579740], 12);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//Mask distro points
const marker1 = L.marker([45.495656,-73.579740]).addTo(map)
  .bindPopup('<b>The Quebec Public Interest Research Group at Concordia</b><br/>2100 Rue Guy #205, Montreal, Quebec H3H 2M8');

const marker2 = L.marker([45.5146512, -73.5752257]).addTo(map)
  .bindPopup('<b>Cyber Love Hotel</b><br/>10 av des Pins O #144, Montreal, Quebec H3H 2M8');

const marker3 = L.marker([45.5143186, -73.5640845]).addTo(map)
  .bindPopup('<b>Nueva Era</b><br/>301 Rue Émery #C1, Montreal, Quebec H3H 2M8');

const marker4 = L.marker([45.4702329, -73.5848270]).addTo(map)
  .bindPopup('<b>Studio 3 Tables</b><br/>4710 Saint Ambroise St #350, Montreal, Quebec H3H 2M8');

const marker5 = L.marker([45.4643572, -73.5667163]).addTo(map)
  .bindPopup('<b>PULP Bookstore</b><br/>3952 Wellington St, Montreal, QC H4G 1V3');

const marker6 = L.marker([45.5103195, -73.6117347]).addTo(map)
  .bindPopup('<b>L Alternative UdeM</b><br/>90 Av. Vincent-D Indy, Montreal, Quebec H3H 2M8');

const marker7 = L.marker([45.5079872, -73.5750501]).addTo(map)
  .bindPopup('<b>The Word</b><br/>469 Rue Milton, Montreal, Quebec H3H 2M8');

const marker8 = L.marker([45.4810209, -73.5523233]).addTo(map)
  .bindPopup('<b>Espace Tapage @ Bâtiment 7</b><br/>1900 Rue Le Ber #201, Montreal, Quebec H3H 2M8');

