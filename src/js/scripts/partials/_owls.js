//owl-carousels--------------------------------------------------------------
if($('.owl-carousel').length){
	//latest-projects--------------------------------------------------------
	if($('.latest-projects').length){
		var projects = $('.latest-projects');
		var param = {
			margin:10,
			nav:true,
			dots: true,
			dotsEach: true,
			lazyLoad: true,
			responsive:{
				0:{
						items:1
				},
				640:{
						items:2
				},
				767:{
						items:3
				},
				1025:{
						items:4
				}
			}
		}
		projects.owlCarousel(param);
		initDots('.latest-projects .owl-dot');
		checkOwlDots();
		projects.on("resized.owl.carousel", function(e) {
			initDots('.latest-projects .owl-dot');
			checkOwlDots();
		})
		
		//owl filters
		$('#owl-filters').on('click','.filter', function(e) {
			var filter_data = $(this).data('filter');
			/* return if current */
			if($(this).hasClass('active')) return;
			/* active current */
			$(this).addClass('active').siblings().removeClass('active');
			/* Filter */
			projects.owlFilter(filter_data, function(_owl) { 
				 $(_owl).find('.project').each(owlAnimateFilter);
				 projectActiveLoad();
			});
			initDots('.latest-projects .owl-dot');
			checkOwlDots();
		}) 

		//check existance of .owl-dots
		function checkOwlDots(){
			if($('.latest-projects .owl-dots.disabled').length){
				$('#latest-projects .read-more').removeClass('to-top').addClass('mt-30');
			}else{
				$('#latest-projects .read-more').addClass('to-top').removeClass('mt-30');
			}
		}
		//animate filters
		var owlAnimateFilter = function(even) {
			$(this)
			.addClass('__loading')
			.delay(70 * $(this).parent().index())
			.queue(function() {
				$(this).dequeue().removeClass('__loading')
			})
		}
		//lazy
		function projectActiveLoad() { 
			$(".active .project").each(function() {
				var src = $(this).find("img").data("src");
				$(this).find("img").attr("src", src).css({
						opacity: "1"
				});
				var animation = $(this).data("animation");
				$(this).addClass(animation), Waypoint.refreshAll()
			})
		}
	}

	//our works-------------------------------------------------------------
	if($('.works').length){
		var works = $('.works');
		var param = {
			margin: 10,
			nav: true,
			dots: true,
			lazyLoad: true,
			dotsEach: true,
			responsive:{
				0:{
					items: 1
				},
				767:{
					items: 2
				},
				1025:{
					items: 3
				}
			}
		}

		works.owlCarousel(param);
		initDots('.works .owl-dot');
		works.on("resized.owl.carousel", function(e) {
			initDots('.works .owl-dot');
		})
	}

	//Clients Carousel------------------------------------------------------ 
	if($('.clients-carousel').length){
		var clients = $('.clients-carousel');
		var param = {
			margin: 10,
			nav: true,
			dots: true,
			dotsEach: true,
			responsive:{
				0:{
					items: 1
				},
				640:{
					items: 2
				},
				767:{
					items: 3
				},
				1025:{
					items: 4
				}
			}
		};
		clients.owlCarousel(param);	
		initDots('.clients-carousel .owl-dot');
		clients.on("resized.owl.carousel", function(e) {
			initDots('.clients-carousel .owl-dot');
		})
	}

	//review home carousel--------------------------------------------------
	if($('.review-wrap').length){
		var reviews = $('.review-wrap');
		$('.review-wrap').owlCarousel({
			loop: true,
			dotsEach: true,
			items: 1
		})
		initDots('.review-wrap .owl-dot');
	}

	//review about carousel------------------------------------------------
	if($('.reviews-carousel').length){
		var reviews_bg = $('.reviews-carousel');
		reviews_bg.owlCarousel({
			loop: true,
			dotsEach: true,
			items: 1
		})
		initDots('.reviews-carousel .owl-dot');
	}

	//ideas carousel-------------------------------------------------------
	if($('#ideas-carousel').length){
		var ideas = $('#ideas-carousel');
		var param = {
			loop: true,
			items: 1,
			lazyLoad: true,
			dots: true,
			nav: true,
			lazyLoadEager: 1,
			slideTransition: 'fade-in-right',
			smartSpeed: 500,
			onInitialized: calcNavWidth,
			onResized: calcNavWidth,
			onTranslated: setTags,
			responsive:{
				0:{
		            items:1
		        },
		        768:{
		            items:1,
		            stagePadding: 115
		        },
		        991:{
		            items:1,
		            stagePadding: 135
		        },
		        1200:{
		            items:1,
		            stagePadding: 170
		        },
		        1300:{
		            items:1,
		            stagePadding: 250
		        },
		        1600:{
		            items:1,
		            stagePadding: 410
		        },
		        1900:{
		            items:1,
		            stagePadding: 460
		        },
		        1921:{
		        	items: 1,
		        	 stagePadding: 0
		        }
			}
		}

		ideas.owlCarousel(param);
		nextPrevActiveLoad();
		initDots('.ideas .owl-dot');
		ideas.on("resized.owl.carousel", function(e) {
			initDots('.ideas .owl-dot');
		})
		ideas.on('changed.owl.carousel', function(event) {
			nextPrevActiveLoad() ;
		})

		//lazyload for next and prev items
		function nextPrevActiveLoad(event) {
			setTimeout(function(){
				ideas.find(".owl-item.active").next(".owl-item").find("img[data-src]").lazyLoadXT({
					show: !0
				});
				ideas.find(".owl-item.active").prev(".owl-item").find("img[data-src]").lazyLoadXT({
					show: !0
				});
			},50);
		}
		// set nav's width equel to active items's width
		function calcNavWidth(event){
			var activeItemWidth = ideas.find(".owl-item.active").width();
			ideas.find(".owl-nav").css({'width': activeItemWidth});
		}
	}
	
	//gallery gorizontal---------------------------------------------------
	var gH = $("#gal-horizontal");

	if (gH.length) {
		gH.imagesLoaded(function() {
			initGalleryHorizontal();
		});

		$(window).on('resize', function() {
			gH.addClass('opacity-0');
			location.reload();
			gH.fadeIn(500, initGalleryHorizontal);
		});

		gH.on('changed.owl.carousel', function() {
			gHActiveLoad(); 
		})

		//mouseweel scroll----------------------------------------------------
		gH.on('mousewheel', '.owl-stage', function (e) {
			if (e.deltaY > 0) {
				gH.trigger('next.owl');
			} else {
				gH.trigger('prev.owl');
			}
			e.preventDefault();
		});

		//gallery horizintal filter -----------------------------------------------
		$('#filters-owl').on('click','.filter', function(e) {
			var filter_data = $(this).data('filter');
			if($(this).hasClass('active')) return;
			$(this).addClass('active').siblings().removeClass('active');

			// filter
			if($('#filters-owl').length){
				gH.owlFilter(filter_data, function(gH) {
					gH.find('.gallery-item').unwrap(); 
					gHActiveLoad();
				});
			}
		})

		//dropdown filters---------------------------------------------------
		$('.filter-btn').on('click', function() {
			$('.filters-list').slideToggle('slow', function() {
				$('.filter-btn').toggleClass('filter-open');
			})
		})

		$(document).on('click', function(e) {
			var target = e.target; 
			if (!$(target).is('.filter-btn, .filter') ) {
				$('.filters-list').slideUp('slow');
			}
		})
		
	}//end of gH

	function initGalleryHorizontal() {
		var screenRacio = $(window).width() / $(window).height();

		if(screenRacio > 1){
			//owl
			ghOwlInit();
			gHActiveLoad();
		}else{
			//isotope
			$('#gallery-horizontal').addClass('gh-iso');	
			gH.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-theme');
			gH.find('.owl-stage').children('.gallery-item').unwrap();
			$('#gallery-horizontal .filters').attr('id', 'filters-iso');
			$('.gallery-item img').removeAttr('style');
			initIsotope();
		}
	}

	function ghOwlInit(){
		var w = $(window).height(),
			nav_height = $('#top-nav').height(),
			bc_height = $('.breadcrumbs').height();
		var containerHeight = w - nav_height - 2.3 * bc_height;

		gH.each(function(index, el) {
			$(el).find('img').each(function(index, img) {
				var h = $(img).prop('naturalHeight');
				$('img').css({
					'width': 100 + '%', 
					'height': containerHeight + 'px'
				});
				$('.owl-stage-outer').height(containerHeight);
			})
		})

		gH.owlCarousel({
			margin: 10,
			smartSpeed: 350,
			lazyLoad: true,
			fluidSpeed: 3,
			loop: false,
			nav: true,
			dots: false,
			onInitialized: ghCounter,
			onTranslated: ghCounter,
			onChange: ghCounter,
			navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],  
			responsive: {
				0:{
					items: 1 
				},
				1024:{
					items: 3
				}
			}
		});

		function ghCounter(t) {
			$(".counter .current-item").text(t.item.index + 1);
			$(".counter .count").text(t.item.count);
		}	
	}	

	//gs-carousel----------------------------------------------------------
	if ($("#gs-carousel").length) {
		var gS = $("#gs-carousel");
		var param = {
			margin: 10,
			smartSpeed: 800,
			fluidSpeed: 3,
			nav: !1,
			dots: !0,
			lazyLoad: !0,
			dotsEach: !0,
			onChange: gHActiveLoad,
			responsive: {
				0: {
						items: 1
				},
				767: {
						items: 2
				},
				1025: {
						items: 3
				}
			}
		}

		gS.owlCarousel(param);
		initDots('#gs-carousel .owl-dot');
		gS.on("resized.owl.carousel", function(e) {
			initDots('#gs-carousel .owl-dot');
		})
		
		gS.on("mousewheel", ".owl-stage", function(e) {
			if (e.deltaY > 0) {
				gS.trigger('next.owl');
			} else {
				gS.trigger('prev.owl');
			}
			e.preventDefault();
		})
	}
	
	//recalculation owl-carousels-------------------------------------------
	$(window).on('resize', function(e){
		recalcCarouselWidth( $('.owl-carousel') );
	});

	$('.owl-carousel').on('refreshed.owl.carousel', function(event) {
		recalcCarouselWidth( $('.owl-carousel') );
	});

	$('.owl-carousel').on('onResize.owl.carousel', function(event) {
		recalcCarouselWidth( $('.owl-carousel') );
	});

	function recalcCarouselWidth(carousel) {
		var $stage = carousel.find('.owl-stage'),
			stageW = $stage.width(),
			$el = $('.owl-item'),
			elW = 0;

		$el.each(function() {
			elW += $(this)[0].getBoundingClientRect().width;
		});
		if ( elW > stageW ) {
			$stage.width( Math.ceil( elW ) );
		}
	}

	//initDots-------------------------------------------------------------
	function initDots(dot){
		var dot = $(dot);
		dot.each(function() {
			var index = $(this).index() + 1;
			if(index < 10){
				$(this).html('0').append(index);
			}else{
				$(this).html(index);
			}
		}); 
	}
}
//end of owl

//lazy
function gHActiveLoad() {
	$(".active .gallery-item").find("img[data-src]").lazyLoadXT({
		show: !0
	})
}

//animate filters
var owlAnimateFilter = function(even) {
	$(this)
	.addClass('__loading')
	.delay(70 * $(this).parent().index())
	.queue(function() {
		$(this).dequeue().removeClass('__loading')
	})
}
