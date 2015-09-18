function initMap() {
  // Create a map object and specify the DOM element for display.
  var styleArray = [
    {
      featureType: "all",
      stylers: [
       { saturation: -80 }
      ]
    },{
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        { hue: "#00ffee" },
        { saturation: 50 }
      ]
    },{
      featureType: "poi.business",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    }
  ];


  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 50.646207, lng: 3.061935},
    scrollwheel: false,
    zoom: 12,
    styles: styleArray
  });

  var marker = new google.maps.Marker({
      position: {lat: 50.646207, lng: 3.061935},
      map: map,
      title: 'IAE Lille'
    });
}

initMap();
