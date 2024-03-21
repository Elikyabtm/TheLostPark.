// Fonction pour initialiser la carte
function initMap() {
    // Coordonnées de la zone géographique 
    var zoneCoord = [
        { lat: 32.774473825029574, lng: -117.81893734783263 }, // Coin supérieur gauche
        { lat: 32.00853169321402, lng: -93.13856553645823 }, // Coin supérieur droit
        { lat: 13.947450061403856,lng: -92.26927219547565}, // Coin inférieur droit
        { lat: 20.08783954929102, lng: -118.08350488639255 }, // Coin inférieur gauche
        { lat: 32.774473825029574, lng: -117.81893734783263 }  // Retour au coin supérieur gauche pour fermer la forme
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: { lat: 25.34963669449321, lng: -105.34646767286547} // Centre initial de la carte
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