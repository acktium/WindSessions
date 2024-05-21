document.addEventListener('DOMContentLoaded', function() {
    if (window.sessionData) {
        var map = L.map('sessionMap').setView([0, 0], 13); // Default view, will be set dynamically
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);
        
        var sessionData = window.sessionData;
        // Assuming sessionData is an array of {lat, lng, intensity} objects

        for (let i = 0; i < sessionData.length - 1; i++) {
            let startPoint = sessionData[i];
            let endPoint = sessionData[i + 1];
            let color = getColorForIntensity(startPoint.intensity);

            let latlngs = [
                [startPoint.lat, startPoint.lng],
                [endPoint.lat, endPoint.lng]
            ];

            L.polyline(latlngs, {
                color: color,
                weight: 5,
                opacity: 0.7
            }).addTo(map);
        }

        if (sessionData.length > 0) {
            map.setView([sessionData[0].lat, sessionData[0].lng], 13);
        }
    } else {
        console.error('Session data is not available.');
    }
    
    function getColorForIntensity(intensity) {
        // This is a placeholder, implement according to your data and desired color scheme
        if (intensity <= 10) {
            return '#9ebedf'; // Light blue for low intensity
        } else if (intensity > 10 && intensity <= 20) {
            return '#6b8e23'; // Olive for medium-low intensity
        } else if (intensity > 20 && intensity <= 30) {
            return '#ffd700'; // Gold for medium intensity
        } else if (intensity > 30 && intensity <= 40) {
            return '#ff8c00'; // Dark orange for medium-high intensity
        } else if (intensity > 40) {
            return '#ff0000'; // Red for high intensity
        }
    }
});