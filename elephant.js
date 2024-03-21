// Fonction pour initialiser la carte
function initMap() {
    // Coordonnées de la zone géographique 
    var zoneCoord = [
        { lat: 14.620035473901572, lng: -18.839417914751913 }, // Coin supérieur gauche
        { lat: 12.741394304476636, lng: 54.10979665582655 }, // Coin supérieur droit
        { lat: -45.32566659110351, lng: 28.621516866106365}, // Coin inférieur droit
        { lat: -18.964181921154278,lng: -17.433167995319085 }, // Coin inférieur gauche
        { lat: 14.620035473901572, lng: -18.839417914751913 }  // Retour au coin supérieur gauche pour fermer la forme
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 3,
        center: { lat: -3.146782951254333, lng: 15.437923871423504} // Centre initial de la carte
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