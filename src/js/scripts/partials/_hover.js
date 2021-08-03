//add .hover------------------------------------------------------------------
setHoverMasonry();
$(window).on('resize', function(){
	setHoverMasonry();
});

function setHoverMasonry(){
	var w_window = $(window).width();
	var w_height = $(window).height();
	$('#gallery-masonry .gallery-item, .hovered .gallery-item').removeClass('hover');
	if(w_window > 1024){
		$('#gallery-masonry')
		.find('.gallery-item:nth-child(1), .gallery-item:nth-child(8)')
		.addClass('hover');
	}else if(w_window < 1025 && w_window > 767 || w_window == 1024 && w_height == 1366){
		$('#gallery-masonry')
		.find('.gallery-item:nth-child(1),.gallery-item:nth-child(5), .gallery-item:nth-child(7)')
		.addClass('hover');
	}
}
$('.hovered').imagesLoaded().progress( function(){
	$('.hovered .grid .gallery-item:nth-child(even').addClass('hover');
})
//.hover in portfolio--------------------------------------------------------------
$('.hover').on('mouseleave', function () {
	$(this).removeClass('hover');
});
