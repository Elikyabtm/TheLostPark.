// Fonction pour initialiser la carte
function initMap() {
    // Coordonnées de la zone géographique (exemple : Paris, France)
    var zoneCoord = [
        { lat: 29.012905078493738, lng: 78.02366838873262 }, // Coin supérieur gauche
        { lat: 29.09214278672363, lng: 93.19645345940316 }, // Coin supérieur droit
        { lat: 22.503377652660706, lng: 92.18440365259254}, // Coin inférieur droit
        { lat: 22.491074614707873, lng: 76.85717565734247 }, // Coin inférieur gauche
        { lat: 29.012905078493738, lng: 78.02366838873262  }  // Retour au coin supérieur gauche pour fermer la forme
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: { lat: 25.567645386391682, lng: 85.10005500491832} // Centre initial de la carte
    });

    // Créer un polygone pour délimiter la zone géographique
    var zone = new google.maps.Polygon({
        paths: zoneCoord,
        strokeColor: '##AF7C66',
        strokeOpacity: 0.8,
        strokeWeight: 4,
        fillColor: '#AF7C66',
        fillOpacity: 0.35
        
    });
    zone.setMap(map);
}
