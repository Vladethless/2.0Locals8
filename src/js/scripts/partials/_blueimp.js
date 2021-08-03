//blueimp lightbox------------------------------------------------------------
if($('.bi-lightbox').length){
	var bg_wrap = '<div id="blueimp-gallery" class="blueimp-gallery" class="blueimp-gallery blueimp-gallery-controls">'+
	'<div class="slides"></div>'+
	'<h3 class="title"></h3>'+
	'<a class="prev"></a>'+
	'<a class="next"></a>'+
	'<a class="close"></a>'+
	'<a class="play-pause"></a>'+
	'<ol class="indicator"></ol></div>';
	$('.content-wrap').append(bg_wrap);
}

var bi = $('.bi-lightbox'); //blueimp-gallery's selector
if($('.bi-lightbox .owl-stage').length){
	bi = $('.bi-lightbox .owl-stage');
}
if(bi.length){	
	bi.on('click', function(event){	
		event = event || window.event;
		var target = event.target || event.srcElement,
		link = target.src ? target.parentNode : target,
		options = {
			index: link,
			event: event,
			activeIndicatorClass: 'active',
			thumbnailProperty: 'thumbnail',
			thumbnailIndicators: true,
			fullScreen: true
		};
		
		var links = this.getElementsByTagName('a');	
		blueimp.Gallery(links, options);
	});

	bi.on('click', function(){
		$('modal-backdrop').removeClass('hidden').addClass('show');
		$('.blueimp-gallery > .close').removeClass('hidden').addClass('show');
	})
}
