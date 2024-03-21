// Fonction pour initialiser la carte
function initMap() {
    // Coordonnées de la zone géographique 
    var zoneCoord = [
        { lat: 23.60467064344653, lng: -85.11793119230738 }, // Coin supérieur gauche
        { lat: 23.140770226231687, lng: -58.39918272308344 }, // Coin supérieur droit
        { lat: 11.157283215827581,lng: -58.79469051292392}, // Coin inférieur droit
        { lat: 18.33409302944091, lng: -85.66724766401815 }, // Coin inférieur gauche
        { lat: 23.60467064344653, lng: -85.11793119230738 }  // Retour au coin supérieur gauche pour fermer la forme
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: { lat: 20.920813681280837, lng: -74.79078344340478} // Centre initial de la carte
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