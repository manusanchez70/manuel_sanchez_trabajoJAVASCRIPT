function initMap() {
    // COORDENADAS DE ORIGEN Y DESTINO
    const origen = { lat: 36.7186223, lng: -4.4221646 };
    const destino = { lat: 36.744139, lng: -4.4301154 };

    // CREACION DEL MAPA 
    const mapa = new google.maps.Map(document.getElementById("mapa"), {
        center: origen,
        zoom: 17
    });

    // CREAR MARCADOR
    const marcadorOrigen = new google.maps.Marker({
        position: origen,
        map: mapa,
        title: 'PSICOLOGIA ESTRELLA'
    });

    // Crea un marcador en el punto de destino
    const marcadorDestino = new google.maps.Marker({
        position: destino,
        map: mapa,
        title: 'MALAGA CENTRO'
    });

    // Crea un objeto DirectionsService
    const directionsService = new google.maps.DirectionsService();

    // Crea un objeto DirectionsRenderer
    const directionsDisplay = new google.maps.DirectionsRenderer({
        map: mapa,
        panel: document.getElementById('panel')//
    });

    // Calcula y muestra la ruta
  
         directionsService.route({
            origin: origen,
            destination: destino,
            travelMode: google.maps.TravelMode.DRIVING,
            avoidTolls: true
        })
        .then((result) => {
            directionsDisplay.setDirections(result);
        })
        .catch((e) => {
            alert("No se pudo calcular la ruta: " + e);
        });
};