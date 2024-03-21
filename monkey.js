// Fonction pour initialiser la carte
function initMap() {
    // Coordonnées de la zone géographique 
    var zoneCoord = [
        { lat: 16.038353450649037, lng: -17.6690313263423 }, // Coin supérieur gauche
        { lat: -0.7653452667267668, lng: 39.575648452114066 }, // Coin supérieur droit
        { lat: -11.607468649183899,lng: 40.35581444568757}, // Coin inférieur droit
        { lat: 5.758801693334435, lng: -21.911183916398276 }, // Coin inférieur gauche
        { lat: 16.038353450649037, lng: -17.6690313263423 }  // Retour au coin supérieur gauche pour fermer la forme
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4.5,
        center: { lat: 3.571989381384799, lng: 7.442561591805082} // Centre initial de la carte
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
