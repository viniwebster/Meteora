let map = new L.Map('map', {
    center: new L.LatLng(40.731253, -73.996139),
    zoom: 12,
});
map.on('click', (e) => {
    let marker = L.marker(e.latlng)
        .bindPopup('Popup')
        .addTo(map)
        .openPopup();
});
map = L.map('map').setView([-23.4062694, -46.8885119], 17);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
L.marker([-23.4062694, -46.8885119]).addTo(map)
    .bindPopup('Nossa loja fica aqui.')
    .openPopup();
