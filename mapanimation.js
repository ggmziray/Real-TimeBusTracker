// Below contains an array with coordinates for all bus stops between MIT and Harvard
const busStops = [
    [-71.093729, 42.359244],
    [-71.094915, 42.360175],
    [-71.0958, 42.360698],
    [-71.099558, 42.362953],
    [-71.103476, 42.365248],
    [-71.106067, 42.366806],
    [-71.108717, 42.368355],
    [-71.110799, 42.369192],
    [-71.113095, 42.370218],
    [-71.115476, 42.372085],
    [-71.117585, 42.373016],
    [-71.118625, 42.374863],
  ];
  
  // Make sure to add your own access token below
  mapboxgl.accessToken =
  'pk.eyJ1Ijoic29mdGV4cGVyaW1lbnQiLCJhIjoiY2tjMngyZm9rMDFvajJzczJ3aWo0bnh6aiJ9.Bc_qK9Xf8SFBXkFM_x2gpg';
  
  // This creates the map object using mapboxgl.map() function
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [-71.104081, 42.365554],
    zoom: 14,
  });
  
  // Make sure to add a marker to the map
  let marker = new mapboxgl.Marker().setLngLat([-71.092761, 42.357575]).addTo(map);
  
  // A counter here represents the index of the current bus stop
  let counter = 0;
  function move() {
    // Make sure to move the marker on the map every 1000ms so the system doesn't crash. Use the function marker.setLngLat() to update the marker coordinates
    // Use counter to access bus stops in the array busStops
  
    setTimeout(() => {
      if (counter >= busStops.length) return;
      marker.setLngLat(busStops[counter]);
      counter++;
      move();
    }, 1000);
  }
  
  // Leave this code as it is. Do not edit
  if (typeof module !== 'undefined') {
    module.exports = { move, counter, marker, busStops };
  }