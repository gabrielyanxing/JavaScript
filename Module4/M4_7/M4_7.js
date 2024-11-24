'use strict';


const karaporttiCoordinates = [60.2241077, 24.7587199];

const map = L.map('map').setView(karaporttiCoordinates, 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const geocoder = L.Control.Geocoder.nominatim();

document.getElementById('routeForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    const address = document.getElementById('address').value;

    try {
        const coordinates = await getCoordinates(address);
        if (!coordinates) {
            alert('Could not find the address. Please try again.');
            return;
        }

        const userMarker = L.marker(coordinates).addTo(map);
        userMarker.bindPopup('Your location').openPopup();

        L.Routing.control({
            waypoints: [
                L.latLng(coordinates),
                L.latLng(karaporttiCoordinates)
            ],
            routeWhileDragging: true,
            createMarker: function() { return null; }
        }).addTo(map);

        const duration = 15;
        const startTime = new Date();
        const endTime = new Date(startTime.getTime() + duration * 60000);

        document.getElementById('startTime').textContent = startTime.toLocaleTimeString();
        document.getElementById('endTime').textContent = endTime.toLocaleTimeString();

    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while fetching the route.');
    }
});

async function getCoordinates(address) {
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`);
        const data = await response.json();
        if (data && data.length > 0) {
            return [parseFloat(data[0].lat), parseFloat(data[0].lon)];
        }
        return null;
    } catch (error) {
        console.error('Error fetching coordinates:', error);
        return null;
    }
}