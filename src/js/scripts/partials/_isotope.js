//Isotope--------------------------------------------------------------------
initIsotope();
//resize Isotope loyout
$(window).on('resize', function(){
	if( $('#grid').length || $('.media-grid').length || $('.blog-grid').length ){
		initIsotope();
	}
});

$('#grid').imagesLoaded().progress( function(){
	$('#grid').fadeIn(1000).isotope('layout');
})

function initIsotope(){
	if( $('#grid').length){
		var param = {
			itemSelector : '.gallery-item',
			resizable: true 
		};
		var $grid_container = $('#grid').isotope(param); 
		
		$grid_container.imagesLoaded(function() {
			$grid_container.isotope("layout");
		});
		initIsotopFilters($grid_container); 
	} 

	if( $('.gh-iso #gal-horizontal').length){
		var param = {
			itemSelector : '.gallery-item',
			resizable: true 
		};
		var $grid_container = $('.gh-iso #gal-horizontal').isotope(param); 
		
		$grid_container.imagesLoaded(function() {
			$grid_container.isotope("layout");
		});
		initIsotopFilters($grid_container); 
	} 

	if( $('.media-grid').length){
		var $grid_container = $('.media-grid');	
		var param = {
			itemSelector : '.media-item',
			percentPosition: true
		};

		$grid_container.imagesLoaded().progress( function() {
			$grid_container.isotope('layout');
		});
		initIsotopFilters($grid_container);
	}

	if( $('.blog-grid').length){
		var $grid_container = $('.blog-grid');
		var param = {
			itemSelector : '.post',
			resizable: true
		};
		
		$grid_container.isotope(param);
		$grid_container.imagesLoaded().progress( function(){
			$grid_container.isotope('layout');
		})

		$(window).on('resize', function(){
			if( $grid_container.length){
				 $grid_container.isotope('layout');
			}
		});
	}
}

// init Filters
function initIsotopFilters($grid_container){
	$grid_container.isotope({ filter: '*' });

	$('#filters, #filters-iso').on( 'click', '.filter', function() {
		var filterValue = $(this).attr('data-filter');
		$grid_container.isotope({ filter: filterValue });
	});

	$('#filters, #filters-iso').on('click','.filter', function() {
		$(this).addClass('active');
		$(this).siblings('.filter').removeClass('active');
	}); 

	$('#filters, #filters-iso').on('click','.filter', function() {
		$(this).parent().addClass('active').siblings().removeClass('active'); 
	})
} 