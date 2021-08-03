//header-page height---------------------------------------------------------
if($('.page-header').length){
	setContentWrapMargin();

	$(window).on('resize', function(e) { 
		setContentWrapMargin();
	});
}


function setContentWrapMargin(){
	var header_height = $('.page-header').height();
	$('.empty-block').css({
		'height': parseFloat(header_height).toFixed(2) + 'px'
	});
}

