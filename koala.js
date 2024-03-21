// Fonction pour initialiser la carte
function initMap() {
    // Coordonnées de la zone géographique 
    var zoneCoord = [
        { lat: -12.298501067787722,lng: 108.71787967809206 }, // Coin supérieur gauche
        { lat: -13.241372922250246, lng: 156.442486318844 }, // Coin supérieur droit
        { lat: -39.30143349231583, lng: 157.40928313845407}, // Coin inférieur droit
        { lat: -39.5051716991347,lng: 108.2784265782693 }, // Coin inférieur gauche
        { lat: -12.298501067787722,lng: 108.71787967809206 }  // Retour au coin supérieur gauche pour fermer la forme
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: { lat: -25.40490935504989, lng: 133.59092512806038} // Centre initial de la carte
    });

    // Créer un polygone pour délimiter la zone géographique
    var zone = new google.maps.Polygon({
        paths: zoneCoord,
        strokeColor: '#AF7C66',
        strokeOpacity: 0.8,
        strokeWeight: 4,
        fillColor: '#AF7C66',
        fillOpacity: 0.35
        
    });
    zone.setMap(map);
}