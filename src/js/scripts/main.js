
//preloader------------------------------------------------------------------
$(window).on('load', function(){
	$('.preloader-backdrop').fadeOut(500);
}) 

$(document).ready(function() {
	initLeitmotiv();
});

function initLeitmotiv(){
	"use strict";
	var ua = window.navigator.userAgent;

	//= partials/_go-to.js
	//= partials/_nav-styles.js
	//= partials/_top-nav.js
	//= partials/_top-nav-horizontal.js
	//= partials/_lazyload.js
	//= partials/_slider-1.js
	//= partials/_slider-2.js
	//= partials/_slider-3.js
	//= partials/_slider-4.js
	//= partials/_slider-slices.js
	//= partials/_owls.js
	//= partials/_hover.js
	//= partials/_waypoints.js
	//= partials/_stat-counters.js
	//= partials/_modal.js
	//= partials/_form-contact.js
	//= partials/_form-start-a-project.js
	//= partials/_isotope.js
	//= partials/_blueimp.js
	//= partials/_justifiedGallery.js
	//= partials/_company-tabs.js
	//= partials/_read-more.js
	//= partials/_services-3.js
	//= partials/_steps.js
	//= partials/_page-header.js

	//object-fit-images---------------------------------------------------------------------
	$(function () { 
		objectFitImages()
	});
	
	// Tooltips Initialization--------------------------------------------------------------
	$(function () {
		$('[data-toggle="tooltip"]').tooltip();
		$("#collapseMenu").collapse({"toggle": true});
	})
//end initLeitmotiv
}
//end



