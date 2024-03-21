// Fonction pour initialiser la carte
function initMap() {
    // Coordonnées de la zone géographique 
    var zoneCoord = [
        { lat: 18.659279693885303, lng: 118.80529308246635 }, // Coin supérieur gauche
        { lat: 25.733128451686273, lng: 137.70177637484508 }, // Coin supérieur droit
        { lat: 16.607265199461015, lng: 142.35997923296637}, // Coin inférieur droit
        { lat: 4.316309622417856,  lng: 123.63927718051671 }, // Coin inférieur gauche
        { lat: 18.659279693885303, lng: 118.80529308246635 }  // Retour au coin supérieur gauche pour fermer la forme
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: { lat: 17.363769103240823, lng: 129.92345650798222} // Centre initial de la carte
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