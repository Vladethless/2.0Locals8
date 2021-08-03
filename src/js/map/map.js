 //map
 $(document).ready(function () {
	"use strict";  
	var office = {lat: 59.9342802, lng: 30.3350986}; // change coordinates
	var title = "Our Office"; // change Info Window's Title
	var address = "Main Street 100, St Petersburg"; //change Address
	var $map = $('.map');

	var contentString = '<div id="google-popup">'+
		'<h4>'+ title +'</h4><p>' + address + '</p><div>'+
        '</div>';

	$map.gmap3({
		zoom: 14,
		center: office,
		mapTypeId: "shadeOfGrey", 
		mapTypeControlOptions: {
			mapTypeIds: [google.maps.MapTypeId.ROADMAP, "shadeOfGrey"]
		}
	})
	.marker({
		position: office,
		options: {
			icon: "./img/map-marker-dark.png"
		}
	})
	.on({
		click: function (marker) {
			marker.setIcon('./img/map-marker-brown.png');
		},
		mouseover: function (marker) {
          marker.setAnimation(google.maps.Animation.BOUNCE);
        },
        mouseout: function (marker) {
          marker.setAnimation(null)
        }
	})	
	.infowindow({
		//popup content
		content: contentString
	})
	.then(function (infowindow) {
		var map = this.get(0);
		var marker = this.get(1);
		marker.addListener('click', function() {
			infowindow.open(map, marker);
		});		
		infowindow.addListener('closeclick', function() {
			marker.setIcon("./img/map-marker-dark.png")
		});
	})
	.styledmaptype(
		"shadeOfGrey",
	 [
		{
			"featureType": "all",
			"elementType": "all",
			"stylers": [
					{
						"visibility": "on"
					},
					{
						"hue": "#ff0000"
					}
			]
		},
		{
			"featureType": "administrative",
			"elementType": "labels.text.fill",
			"stylers": [
					{
						"color": "#444444"
					}
			]
		},
		{
			"featureType": "landscape",
			"elementType": "all",
			"stylers": [
					{
						"color": "#f2f2f2"
					}
			]
		},
		{
			"featureType": "poi",
			"elementType": "all",
			"stylers": [
					{
						"visibility": "off"
					}
			]
		},
		{
			"featureType": "road",
			"elementType": "all",
			"stylers": [
					{
						"saturation": -100
					},
					{
						"lightness": 45
					}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "all",
			"stylers": [
					{
						"visibility": "simplified"
					}
			]
		},
		{
			"featureType": "road.arterial",
			"elementType": "labels.icon",
			"stylers": [
					{
						"visibility": "off"
					}
			]
		},
		{
			"featureType": "transit",
			"elementType": "all",
			"stylers": [
					{
						"visibility": "off"
					}
			]
		},
		{
			"featureType": "water",
			"elementType": "all",
			"stylers": [
					{
						"color": "#cce7f2"
					},
					{
						"visibility": "on"
					}
			]
		}
	 ]
	);
})




