// Fonction pour initialiser la carte
function initMap() {
    // Coordonnées de la zone géographique 
    var zoneCoord = [
        { lat: 25.250574068722106,lng: -109.20600321074228 }, // Coin supérieur gauche
        { lat: 25.924371261198317, lng: -95.51703915126325 }, // Coin supérieur droit
        { lat: 19.52450095388764, lng: -94.22065250678611}, // Coin inférieur droit
        { lat: 17.398781128178694, lng: -106.26166744192977 }, // Coin inférieur gauche
        { lat: 25.250574068722106,lng: -109.20600321074228 }  // Retour au coin supérieur gauche pour fermer la forme
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: { lat: 22.640291009373293, lng: -101.82319113371987} // Centre initial de la carte
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