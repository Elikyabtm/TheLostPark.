// Fonction pour initialiser la carte
function initMap() {
    // Coordonnées de la zone géographique 
    var zoneCoord = [
        { lat: 15.002401072466137,lng: 35.34514929339462 }, // Coin supérieur gauche
        { lat: 13.383513510497046, lng: 44.397883149743514 }, // Coin supérieur droit
        { lat: -1.9175393478397693, lng: 41.80510986078922}, // Coin inférieur droit
        { lat: 0.41120057763563633,lng: 31.08245422511382 }, // Coin inférieur gauche
        { lat: 15.002401072466137,lng: 35.34514929339462 }  // Retour au coin supérieur gauche pour fermer la forme
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: { lat: 6.636548514536494, lng: 38.77288347201217} // Centre initial de la carte
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