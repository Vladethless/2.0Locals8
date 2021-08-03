// Service-3-----------------------------------------------------------------
if($('.services-3').length){   
	$('.service-item').on('mouseenter', function(e){
		var bg = $(this).data('service-bg');
		$('.services-wrap').attr('data-service', bg);
	})
}