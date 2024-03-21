// Fonction pour initialiser la carte
function initMap() {
    // Coordonnées de la zone géographique 
    var zoneCoord = [
        { lat: -11.03363296107701,lng: -70.12359741090498 }, // Coin supérieur gauche
        { lat: -9.216755889134435, lng: -65.2896133128546 }, // Coin supérieur droit
        { lat: -18.589724891224897, lng: -55.62164511675384}, // Coin inférieur droit
        { lat: -23.589878126956734,lng: -69.06890997133036 }, // Coin inférieur gauche
        { lat: -11.03363296107701,lng: -70.12359741090498 }  // Retour au coin supérieur gauche pour fermer la forme
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: { lat: -17.12579090183265, lng: -64.63043366312046} // Centre initial de la carte
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