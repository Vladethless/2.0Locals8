//Slider's slices------------------------------------------------------------
(function ( $, window ) {
	var _defaults = {
		x : 4 // number of tiles in x axis
	};
	//Add Slices
	$.fn.sliced = function( options ) {
		var o = $.extend( {}, _defaults, options );
		return this.each(function() {
			var $container = $(this);
			//Make Slices
			var width = $container.width(),
				height = $container.height(), 
				$img = $container.find('img'),
				src = $img.data('src'),
				n_tiles = o.x,
				tiles = [], $tiles,
				tile_width = Math.round(width / o.x);
					
			for ( var i = 0; i < n_tiles; i++ ) {
				tiles.push('<div class="tile-wrap"/>');
			}

			$tiles = $( tiles.join('') );

			// Hide original image and insert tiles in DOM
			$img.hide().after($tiles);

			// Adjust position
			var tile_pos = 0;

			$tiles.each(function() {
				$(this).append('<div class="tile-rel"><div class="tile"></div><div class="tile-back"></div></div>'); 

				$(this).css({
					'position': 'absolute',
					'width': tile_width,
					'left': Math.round(tile_pos)
				});

				$(this).find('.tile').css({
					'background-image': 'url(' + src + ')',
					'background-position-x': - Math.round(tile_pos) + 'px',
					'background-position-y': '50%',
					'background-repeat': 'no-repeat'
				});

				tile_pos += tile_width;
			});
		});
	};

	//Remove Tiles
	$.fn.unsliced = function() {
		return this.each(function() {
			var $container = $(this);
			$container.find('img').show();
			$container.find('.tile-wrap').remove();
		});
	};

}( jQuery, window ));

var carouselItem =  $('#slider .carousel-item, #blog-carousel .carousel-item');

//lazy load for slides
if($(window).width() > 769){ 
	carouselItem.sliced({x: 6});
}
//recalculation tiles on resize window
$(window).on('resize', function () {
	if($(window).width() > 769){
		carouselItem.unsliced();
		carouselItem.sliced({x: 6});
	}else{
		carouselItem.unsliced();
	}
}) 

