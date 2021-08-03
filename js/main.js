/*
 * Project: leitmotiv-2.0.0
 * Version: 1.0.0
 * Author: Tatiana_Sh
 * Last Changes:2019/05/28
 * Primary use: Coporate, Business, Portfolio.
*/


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

	//go-to-top------------------------------------------------------------------

	$(window).on('scroll', function(){

		if ($(this).scrollTop() > 200) {

			$('.go-to-top').css({

				'display': 'block'

			});        

		}else {

			$('.go-to-top').css({

				'display': 'none'

			});

		}

	});

	

	$('.go-to-top').on('click', function() {

		$('html, body').animate({

			scrollTop: 0

		}, 1500);

		return false;

	});

	

	$('a.scrollTo').on('click', function() {

		event.preventDefault();

		var nav = convertRemToPixels(2);

		var offset = 1.5 * nav;

		$("html, body").animate({ 

			scrollTop: $($(this).attr('href')).offset().top - offset

		}, 1500);

	})
	// change top-nav css------------------------------------------------------ 
	$(window).on('scroll', function(){
		if ($(this).scrollTop() > 60) {
			$('#top-nav, #top-nav-horizontal, #shop-top-nav-horizontal').css({
				'background': 'rgba(0,0,0,  .8)',
				'color': '#fff'
			});
	
			$('#top-nav-horizontal #horizontal-nav ul li a, #shop-top-nav-horizontal #shop-horizontal-nav ul li a').css({
				'color': '#fff'
			})		
	
		} else {
			 $('#top-nav, #top-nav-horizontal, #shop-top-nav-horizontal').css({
				'background': 'rgba(255,255,255,  .9)',
				 'color': '#222'
			});
	
			 $('#top-nav-horizontal #horizontal-nav ul li a, #shop-top-nav-horizontal #shop-horizontal-nav ul li a').css({
				'color': '#999'
			})
		}
	});
	//sidebar sticky position--------------------------------------------------------
	var w_width =  $(window).width();
	if(w_width > 768){
		$('.blog-sidebar').addClass('fixedsticky');
	}
	//topnav---------------------------------------------------------------------
	var trigger = $('.hamburger');
	var sidenav = $('#sidebar-wrapper');
	var isClosed = $('.is-closed');
	isClosed = false;
	var navEffectIn = 'fadeInLeft';
	var navEffectOut = 'animated';
	var navList = $('.sidebar-nav > li');
	
	navList.addClass(navEffectOut);
	
	trigger.on('click', function () {
		toggleHamburgerState();
	});  
		
	$('[data-toggle="offcanvas"]').on('click', function () {
		$('#sidebar-wrapper').toggleClass('toggled');
	});
	
	$('.dropdown-toggle').on('click', function(){
		if($(this).parent().hasClass('active')){
			$(this).parent().removeClass('active');
			$(this).next('.dropdown-menu').slideToggle(300);
			$(this).parent().siblings().find('.dropdown-menu').slideUp(200);
		}else{
			$(this).parent().addClass('active');
			$(this).parent().siblings().removeClass('active');
			$(this).next('.dropdown-menu').slideToggle(300);
			$(this).parent().siblings().find('.dropdown-menu').slideUp(200);
		}
	}) 
	
	function toggleHamburgerState() {
		if (isClosed == true) {
			trigger.removeClass('is-open');
			trigger.addClass('is-closed');
			isClosed = false;
			navList.removeClass(navEffectIn);
		} else {
			trigger.removeClass('is-closed');
			trigger.addClass('is-open');
			isClosed = true;
			navList.addClass(navEffectIn);
		}
	}
	
	//sliding for #h-nav----------------------------------------------------
	$('#h-nav').on('show.bs.collapse', function(e){
		$(this).stop(true, true).slideDown(300);
	});
	
	$('#h-nav').on('hide.bs.collapse', function(e){
		$(this).stop(true, true).slideUp(200);
	});
	//nav vertical scrollbar----------------------------------------------------- 
	if($('#top-nav').length ){
		initVerticalScrollbar();
		
		$(window).on('resize', function() {
			initVerticalScrollbar();
		});
	} 
	
	function initVerticalScrollbar(){
		var v_nav = $('.scrollbar-wrap');
		var w_height = $(window).height() - 100;
		v_nav.height(w_height);
	
		v_nav.mCustomScrollbar({
			theme: 'leitmotiv'
		})
	}
	
	//nav horizontalscrollbar-------------------------------------------------  
	
	$('#h-nav').on('shown.bs.collapse', function () {
		initHorizontalScrollbar();
	
		$(window).on('resize', function() {
			initHorizontalScrollbar();
		});
	
		$('.dropdown').on('click', function(){
			initHorizontalScrollbar();
		})
	})
	
	function initHorizontalScrollbar(){
		var w_width = $(window).width();
		var h_nav = $('#horizontal-nav, #shop-horizontal-nav');
		var w_height = $(window).height() - 100;
		h_nav.height(w_height);
		
		if(w_width <= 991){
			h_nav.mCustomScrollbar({
				 theme: 'leitmotiv'
			});
		}else{
			h_nav.mCustomScrollbar('destroy');
		}
	}
	
	//horizontal-nav active class----------------------------------------------
	$(' #horizontal-nav .dropdown, #shop-horizontal-nav .dropdown').on('click', function(){
		$(this).siblings('.dropdown').removeClass('active');
		$(this).addClass('active');
	})
	
	//click outside .dropdow-menu----------------------------------------------
	$(document).on("click", function(event){
		var $trigger = $(".dropdown");
		if($trigger !== event.target && !$trigger.has(event.target).length){
			$(".dropdown-menu").slideUp();
		}
	});  
	
	//Lazy Load------------------------------------------------------------------
	var lazyImg ={
		autoInit: false
	}
	$(window).lazyLoadXT(lazyImg);
	
	$.lazyLoadXT.onload = function() {
		var $el = $(this);
		var effect = $el.attr('data-animation');
		var delay = $el.attr('data-delay');
	
		if($('.mr-animated')){//reveal animation
			var parent = $el.parents('.mr-animated');
			var parentEffect = parent.data('animation');
			parent.addClass(parentEffect);
		}	
		if(effect){	
			$el
			.addClass('animated' +' '+ effect)
			.removeAttr('data-animation')
			.removeClass('lazy-hidden');
		} 
	};
	
	//Tabs lazy-load--------------------------------------------------------
	$('a[data-toggle="pill"]').on('shown.bs.tab', function (e) {
		var id = $(e.target).attr('href');
		$(id).find("img[data-src]").lazyLoadXT({
			show: !0
		})
	})
	
	
	
	
	
	
	
	
	
	//Default Slider-------------------------------------------------------------
	//carousel-indicator active
	$('#slider .carousel-item-indicator').on('click', function(){
		if($(this).hasClass('active')) return;
		$(this).addClass('active').siblings().removeClass('active');
	})
	
	//Slider-company-------------------------------------------------------------
	//lazi load carousel images 
	if($('#leitmotivCarousel').length || $('#blog-slider').length || $('#slider-4').length || $('#slider-5').length){
		$(function() {
			return $("#leitmotivCarousel, #blog-slider, #slider-4, #slider-5").on("slid.bs.carousel", function(e) {
				var img = $('.carousel-item.active').find('img:not(".img-prev")');
				var src = img.data('src');
				img.attr("src", src)
				.removeAttr("data-src")	
				.removeClass('lazy-hidden'); 
			});
		});
	}
	
	//lazi load for slider-2 or slider-company
	if($('#slider-company').length){
		 activeItemSrc();
	}
	
	function activeItemSrc(){
		$("#slider-company").on("slid.bs.carousel", function() {
			var lg_img = $('.carousel-item.active').find('img.large-img');
			var sm_img = $('.carousel-item.active').find('.small-img img');
			var lg_src = lg_img.data('src');
			var sm_src = sm_img.data('src');
			lg_img.prop("src", lg_src);
			sm_img.prop("src", sm_src);	
		})
	}
	
	
	
	
	//Slider-blog or Slider Alternative-2----------------------------------------
	//Slider's active data
	function setActiveData(){
		$('.slider-post-title').empty();
		$('.slider-post-date').empty();
		var active_tag = $('.carousel-item.active').data('tag');
		var active_date = $('.carousel-item.active').data('date');
		$('.slider-post-title').html(active_tag);
		$('.slider-post-date').html(active_date);  
	}
	
	if($('.blog-slider-wrap').length > 0 ){
		setActiveData();
		$('#blog-carousel').on('slid.bs.carousel', function () {
			setActiveData();
		})
	}
	
	//Number Counter for Carousels
	
	initNumCounter();
	
	$('#blog-slider, #slider-company, #slider-5').on('slid.bs.carousel', function() {
		initNumCounter();
	});
	
	function initNumCounter(){
		var totalItems = $('.carousel-item').length;
		var currentIndex = $('div.active').index() + 1;
		$('.num').html('' + currentIndex + '/' +totalItems + '');
	}  
	//Slider-4--------------------------------------------------------------------
	
	$("#slider-4").on("slid.bs.carousel", function() {
		setActiveData4();
		var animationEls = [$('.author-name h5'), $('.author-name p'), $('.project-name h5'), , $('.project-name p')];
		runAnimation(animationEls);	
		if (ua.indexOf("Trident/7.0") > -1){
			var activeSlide = $('.carousel-item.active').find('img');
			var active_img = activeSlide.data('src');
			activeSlide.attr('src', active_name);
		}
	});
	
	function setActiveData4(){
		var activeSlide = $('.carousel-item.active');
		$('.author-name h5').empty();
		$('.author-name p').empty();
		$('.project-name h5').empty();
	
		//get active date
		var active_name = activeSlide.data('author');
		var active_author_href = activeSlide.data('author-href')
		var active_work = activeSlide.data('work');
		var active_title = activeSlide.data('title');
		var active_href = activeSlide.data('href');
	
		//set active date
		$('.author-name h5').html(active_name);
		$('.author-name').attr('href', active_author_href);
		$('.author-name p').html(active_work);
		$('.project-name h5').html(active_title);
		$('.author-img').attr('data-author-img', active_name); 
		$('.project').attr('href', active_href); 
	}
	
	function runAnimation(arr){
		for (var i = 0; i < arr.length; i++) {
			var el = arr[i];
			$(el).replaceWith($(el).clone());
		}
	}
	
	
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
	
	//Waypoints animation -------------------------------------------------------
	//statistic's counters
	$('.is-animated').waypoint({
		handler: function() {
			var animation_name = $(this.element).data('animation');
			if(animation_name){
				$(this.element).addClass(animation_name);
			}
			initStatCounter(); 
		},
		offset: function() {
			return Waypoint.viewportHeight();
		}
	});
	
	//animate.css
	var waypoints = $('.animated').waypoint(function(direction) {
		var animation_name = $(this.element).data('animation');
		var animation_delay = $(this.element).data('delay');
		var animation_duration = $(this.element).data('duration');
	
		if(animation_name){
			$(this.element).addClass(animation_name).removeAttr('data-animation');
		}
	
		if(animation_delay){
			$(this.element).css({
				'animation-delay': animation_delay + 's'
			}).removeAttr('data-delay');
		}
	
		if(animation_duration){
			$(this.element).css({
				'animation-duration': animation_duration + 's'
			}).removeAttr('data-duration');
		}
	
		// $(this.element).removeClass('animated');
	},{
		offset: function() {
			return Waypoint.viewportHeight();
		}
	})
	
	$(window).scroll(function () {
	    if ($(this).scrollTop() > 0) {
	        var waypoint1 = $('.has-animation').waypoint({
				offset: function() {
					return Waypoint.viewportHeight();
				},
				handler: function(direction) {
				  $(this.element).addClass('animate-in');
				}
			})
	    }
	});
	
	
	
	
	
	
	
	//Statiscic's counters-------------------------------------------------------
	function initStatCounter(){
		$('.count').each(function() {
			var $this = $(this),
					countTo = $this.attr('data-count');
			$this.text(0);
			$({ countNum: $this.text()}).animate({
				countNum: countTo
				},{
					duration: 4000,
					easing: 'linear',
					step: function() {
						$this.text(Math.floor(this.countNum));
					},
					complete: function() {
						$this.text(this.countNum);
					}
			});
		});
	}; 
	//modal html
	var git_modal = '<div class="modal fade" id="git-modal" tabindex="-1" role="dialog" aria-labelledby="git-modal-title" aria-hidden="true">'+
	  '<div class="modal-dialog" role="document">'+
	    '<div class="modal-content">'+
	      '<div class="modal-header">'+
	        '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'+
	          '<span aria-hidden="true">&times;</span>'+
	        '</button>'+
	      '</div>'+
	      '<div class="modal-body">'+
	      '<div id="git-modal-title"><h5></h5></div>'+
	      '<p></p></div>'+
	    '</div>'+
	  '</div>'+
	'</div>';
	//contact-form --------------------------------------------------------------
	//contact-form's handler
	$("#get-in-touch").validator()
	.on('submit', function (event) {
		if (event.isDefaultPrevented()) {
			formError('Error');
		} else {
			event.preventDefault();
			submitForm();
		}
	});
	
	function submitForm(){
		// get form values and compose a data string
		var name = $('#git-name').val();
		var email = $('#git-email').val();
		var message = $('#git-message').val();
		var data ='name=' + name + '&email=' + email + '&message=' + message;
	
		//AJAX call passing dataString in POST
		$.ajax({
			type: 'POST',
			data: data,
			url: 'php/get-in-touch.php',
			success : function(){
				formSuccess();
			},
			error: function(jqXHR, exception, data) {
					formError();
				}
		})
	
		function formSuccess(){
			$('body').append(git_modal);
			$('#git-modal-title h5').text('Thank you for your message!');
			$('#git-modal .modal-body p').text('Your message was successualy sent! We will contact you shortly.');
			$('#git-modal').modal('show');
			$("#get-in-touch")[0].reset();
			$('.git-submit-btn').attr({
					"data-original-title": "Please, fill all required fields!"
			});
		}
	
		function formError(text){
			$('body').append(git_modal);
			$('#git-modal-title h5').text('Sorry an error occurred!');
			$('#git-modal .modal-body p').text('Please try again, Sorry for the trouble.');
			$('#git-modal').modal('show');
			$("#get-in-touch")[0].reset();
			$('.git-submit-btn').attr({
					"data-original-title": "Please, fill all required fields!"
			});
		}
	}
	
	//form's classes-------------------------------------------------------------
	$('input[type=text]:not([readonly]), input[type=password]:not([readonly]), input[type=email]:not([readonly]), input[type=url]:not([readonly]), input[type=time]:not([readonly]), input[type=date]:not([readonly]), input[type=datetime-local]:not([readonly]), input[type=tel]:not([readonly]), input[type=number]:not([readonly]), input[type=search-md]:not([readonly]), input[type=search]:not([readonly]), textarea:not([readonly])')
	.on('focus', function() { 
		 $(this)
			 .parent()
			 .addClass('focus')
			 .siblings()
			 .removeClass('focus');
	});
	
	$('input[type=text]:not([readonly]), input[type=password]:not([readonly]), input[type=email]:not([readonly]), input[type=url]:not([readonly]), input[type=time]:not([readonly]), input[type=date]:not([readonly]), input[type=datetime-local]:not([readonly]), input[type=tel]:not([readonly]), input[type=number]:not([readonly]), input[type=search-md]:not([readonly]), input[type=search]:not([readonly]), textarea:not([readonly])')
	.on('focusout', function(){ 
		 $(this).parent().removeClass('focus');
	})
	
	//Start-a-Project Form---------------------------------------------------
	  //sap handler
	  $('#start-a-project').validator().on('submit', function (event) {
	    if (event.isDefaultPrevented()) {
	      formSAPError('Error');
	    } else {
	      event.preventDefault();
	      submitSAPForm();
	    }
	  });
	
	  function submitSAPForm(){
	    // get values from checkboxes
	    var checked_services = $('input[name=services]:checked').map(function() {
	      return this.value;
	    }).get().join(','); 
	
	    // get form values and compose a data string
	    var firstname = $('#sap-first-name').val();
	    var lastname = $('#sap-last-name').val();
	    var email = $('#sap-email').val();
	    var phone = $('#sap-phone').val();
	    var company = $('#sap-company').val();
	    var website = $('#sap-website').val();
	    var message = $('#sap-message').val();
	    var data ='name=' + firstname +' '+ lastname +  '&email=' + email + '&phone=' + phone + 
	    '&company=' + company + '&website=' + website + '&message=' + message + '&checked_services=' + checked_services; 
	    
	    //AJAX call passing dataString in POST
	    $.ajax({
	      type: 'POST',
	      data: data,
	      url: 'php/start-a-project.php',
	      success : function(){
	        formSAPSuccess();
	      },
	      error: function(text){
	        formSAPError(text);
	      }
	    })
	
	    function formSAPSuccess(){
	      $('body').append(git_modal);
	      $('#git-modal-title h5').text('Thank you for your message!');
	      $('#git-modal .modal-body p').text('Your project is successualy started! We will contact you shortly.');
	      $('#git-modal').modal('show');
	      $("#start-a-project")[0].reset();
	      $('button[type=submit').attr({
	          "data-original-title": "Please, fill all required fields!"
	      });
	    }
	
	    function formSAPError(text){
	      $('body').append(git_modal);
	      $('#git-modal-title h5').text('Sorry an error occurred!');
	      $('#git-modal .modal-body p').text('Please try again, Sorry for the trouble.');
	      $('#git-modal').modal('show');
	      $("button[type=sub]")[0].reset();
	      $('button[type=submit').attr({
	          "data-original-title": "Please, fill all required fields!"
	      });
	    }
	  }  
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
	//justifiedGallery------------------------------------------------------------
	if($('#gallery-single-5').length || $('#justified-gallery').length){
	    initJustifiedGallery();
	    var resizeTimeout;
	
	    window.onresize = function () {
	        clearTimeout(resizeTimeout);
	        resizeTimeout = setTimeout(afterWindowResize, 100); 
	    };
	
	    //filters
	    $('#filters').on( 'click', '.filter', function() {
	        var filterValue = $(this).attr('data-filter');
	        $('.gallery-wrapper').justifiedGallery({ filter: filterValue }); 
	        $(this).addClass('active');
	        $(this).siblings('.filter').removeClass('active');
	    });
	
	    $('.gallery-wrapper').justifiedGallery();
	}
	
	
	function afterWindowResize() {
	    initJustifiedGallery();
	}
	
	function initJustifiedGallery() {
	    let rowHeight = calculateRowHeight();
	    let rowMaxHeight = calculateMaxRowHeight(rowHeight);
	
	    $('.gallery-wrapper').justifiedGallery({
	        rowHeight: rowHeight,
	        maxRowHeight: rowMaxHeight,
	        lastRow: 'justify',
	        margins: 10,
	        captions: false,
	        randomize: true
	    }); 
	}
	
	function calculateRowHeight() {
	    let rowHeight = 300;
	
	    if ($(window).width() < 991) {
	        rowHeight = 280;
	    }
	
	    if ($(window).width() < 768) {
	        rowHeight = 320;
	    }
	    return rowHeight;
	}
	
	function calculateMaxRowHeight(height) {
	    let rowMaxHeight = 1.8 * height; 
	
	    if ($(window).width() < 768) {
	        rowMaxHeight = height;
	    }
	    return rowMaxHeight;
	}
	
	
	
	//Tabs-----------------------------------------------------------------------
	if($('#company-tabs').length){
		$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
			var imgClass = $(e.target).data('img');
			$('.tab-img').attr('data-bgimg', imgClass);
			$('.tab-img').fadeIn('slow');
			initNumCounterTabs($(e.target));
		})
	}
	
	function initNumCounterTabs(el){
		var tabs = el.parents('.tabs').attr('id');
		var totalItems = $('#' + tabs +' '+'.nav-link').length;
		var currentIndex = $('#' + tabs +' '+'.nav-link').index(el) + 1;
		$('#' + tabs +' '+'.current-tab').text(currentIndex);
		$('#' + tabs +' ' +'.number-tabs').text(totalItems);
	}
	//Button Text Animation------------------------------------------------------
	initReadMoreText();
	function initReadMoreText(){
		var read_more = $('.read-more span, .btn span, .tag span, .plan-select a span, .btn-plan span');   
		read_more.each(function() {
		  var text = $(this).text();
		  $(this).attr('data-after',text);
		})
	}
	// Service-3-----------------------------------------------------------------
	if($('.services-3').length){   
		$('.service-item').on('mouseenter', function(e){
			var bg = $(this).data('service-bg');
			$('.services-wrap').attr('data-service', bg);
		})
	}
	//Steps with background -----------------------------------------------------
	if($('#steps-bg').length){
		// initNumCounterTabs();
		$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
			initNumCounterTabs($(e.target));
			$('.tab-pane.active').find('img[data-src]').lazyLoadXT({show: true});
		})
	}
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
	
	
	//Shop-----------------------------------------------------------------------
	//star-rating( add individual id to each star)
	// $( ".product-rating" ).each(function( index ) {  
	//   var productIndex = index;
	//   $(this).find('input[name="rating"]').each( function() {  	
	//    	var id = $(this).attr('id');   	
	//    	$(this).attr('id', id +'-' + productIndex);
	//    	$(this).next('label[for='+ id + ']').attr('for', id +'-' + productIndex);
	//   })
	// })
	
	
	//Color Pallete---------------------------------------------------
	$('.product .color-pallete .color').on('click', function(){
		$(this).addClass('active').siblings('.color').removeClass('active');
		var color = $(this).data('color');
		var product = $(this).parents('.product');
		product.find('img').removeClass('active').removeClass('non-active');
		var imgColor = product.find('img .' + color);	
		product.find('img').addClass('non-active');
	})
	
	$('.product-detail .color-pallete .color').on('click', function(){
		var prevClr = $('.color-pallete .active').data('color'); //prev Color
		$(this).addClass('active').siblings('.color').removeClass('active');
		var color = $(this).data('color'); //new Color
		var instock = $(this).data('instock'); //new Availability
		var activeClr = $(this).parents('.product-detail').find('.active-clr img'); //active image
		var activeSku = $(this).parents('.product-detail').find('.sku'); //active sku
		var activeInstock = $(this).parents('.product-detail').find('.instock ins'); //active instock
		var src = activeClr.attr('src');
		var skuText = activeSku.text();
		var newSrc = src.replace(new RegExp(prevClr, 'i'), color);
		var newSku = skuText.replace(new RegExp(prevClr, 'i'), color);
		activeClr.attr('src', newSrc);
		activeSku.text(newSku);
		activeInstock.text(instock);
	})
	
	//Countdown------------------------------------------------------
	function getTimeRemaining(endtime) {
	  var t = Date.parse(endtime) - Date.parse(new Date());
	  var seconds = Math.floor((t / 1000) % 60);
	  var minutes = Math.floor((t / 1000 / 60) % 60);
	  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
	  var days = Math.floor(t / (1000 * 60 * 60 * 24));
	  return {
	    'total': t,
	    'days': days,
	    'hours': hours,
	    'minutes': minutes,
	    'seconds': seconds
	  };
	}
	
	function initializeClock(id, endtime) {
	  var clock = $('#'+ id);
	  var daysSpan = clock.find('.days span');
	  var hoursSpan = clock.find('.hours span');
	  var minutesSpan = clock.find('.minutes span');
	  var secondsSpan = clock.find('.seconds span');
	
	  function updateClock() {
	    var t = getTimeRemaining(endtime);  
	    daysSpan.text(t.days);
	    hoursSpan.text( ('0' + t.hours).slice(-2));
	    minutesSpan.text(('0' + t.minutes).slice(-2));
	    secondsSpan.text(('0' + t.seconds).slice(-2));
	
	    if (t.total <= 0) {
	      clearInterval(timeinterval);
	    }
	  }
	
	  updateClock();
	  var timeinterval = setInterval(updateClock, 1000);
	}
	//action1
	var deadline1 = '2019-12-26';
	initializeClock('clockdiv1', deadline1);
	
	//action2
	var deadline2 = '2019-08-28';
	initializeClock('clockdiv2', deadline2);
	
	//Slider-5------------------------------------------------------
	setBgImg();
	
	$("#slider-5").on("slid.bs.carousel", function(event){	
		var direction = event.direction;
		var from = event.from; //prev
		var active = $("#slider-5").find('.carousel-item.active');
		var srcPrev = $('#slider-5 .carousel-item').eq(from).find('.img-wrap .img').attr('src'); 
		var scrActive = active.find('.img-wrap .img').data('src'); 
		
		$("#slider-5").find('.carousel-item .img-wrap').removeClass('height-full').find('.img-prev').remove();
		active.find('.img-wrap').append('<img src="' + srcPrev + '" class="img-prev" alt="Prev Img"/>');
		active.find('.img-wrap').addClass('height-full');
	});
	
	
	function setBgImg() {
		setTimeout(function(){
			var img = $("#slider-5").find('.carousel-item.active');
			$("#slider-5").find('.carousel-item .img-wrap').removeClass('height-full');
			img.find('.img-wrap').addClass('height-full');
		},50);	
	}
	$('#slider-5').carousel({
	    interval: false
	});
	  
	
	//Shopping cart-------------------------------------------------------
	if($('.btn-cart').length){
		$('.btn-cart').on('click', function(){
			// event.preventDefault();
			$('#shopping-cart').toggleClass('cart-open');
		})
	
		$('.sc-collapse').on('click', function(){
			$(this).parents('.cart').removeClass('cart-open');
		})
	}
	
	//Image's Tags----------------------------------------------------------
	var tagsInfo = [
		{
			"sku" : "1", 
			"item": {
				"title" : "Pieced Cotton Throw Pillows", 
				"url" :"./images/ideas/preview/sku-1.jpg", 
				"price" : "$30", 
				"href": "index.html"
			}
		},
	
		{ 
			"sku" : "2",
			"item" : {
				"title" : "Arched Table Lamp",
				"url" :"./images/ideas/preview/sku-2.jpg",
				"price" : "$60",
				"href": "index.html"
			}
		},
		{ 
			"sku" : "3",
			"item" : {
				"title" : "Modern drawer nightstand",
				"url" :"./images/ideas/preview/sku-3.jpg",
				"price" : "$70",
				"href": "index.html"
			}
		},
		{ 
			"sku" : "4",
			"item" : {
				"title" : "Coffee Table",
				"url" :"./images/ideas/preview/sku-4.jpg",
				"price" : "$170",
				"href": "index.html"
			}
		},
		{ 
			"sku" : "5",
			"item" : {
				"title" : "Brand Sofa",
				"url" :"./images/ideas/preview/sku-5.jpg",
				"price" : "$670",
				"href": "index.html"
			}
		},
		{ 
			"sku" : "6",
			"item" : {
				"title" : "Brand Floor Lamp",
				"url" :"./images/ideas/preview/sku-6.jpg",
				"price" : "$390",
				"href": "index.html"
			}
		},
		{ 
			"sku" : "7",
			"item" : {
				"title" : "Brand Side Chair",
				"url" :"./images/ideas/preview/sku-7.jpg",
				"price" : "$650",
				"href": "index.html"
			}
		},
		{ 
			"sku" : "8",
			"item" : {
				"title" : "Brand Sofa",
				"url" :"./images/ideas/preview/sku-8.jpg",
				"price" : "$70",
				"href": "index.html"
			}
		},
		{ 
			"sku" : "9",
			"item" : {
				"title" : "Painting Print on Wrapped Canvas",
				"url" :"./images/ideas/preview/sku-9.jpg",
				"price" : "$70",
				"href": "index.html"
			}
		},
		
		{ 
			"sku" : "10",
			"item" : {
				"title" : "Etagere Bookcase",
				"url" :"./images/ideas/preview/sku-10.jpg",
				"price" : "$112",
				"href": "index.html"
			}
		},
	
		{ 
			"sku" : "11",
			"item" : {
				"title" : "Brand Sofa",
				"url" :"./images/ideas/preview/sku-11.jpg",
				"price" : "$700",
				"href": "index.html"
			}
		},
		{ 
			"sku" : "12",
			"item" : {
				"title" : "Brand Coffee Table",
				"url" :"./images/ideas/preview/sku-12.jpg",
				"price" : "$700",
				"href": "index.html"
			}
		},
		{ 
			"sku" : "13",
			"item" : {
				"title" : "Brand Side Chair",
				"url" :"./images/ideas/preview/sku-13.jpg",
				"price" : "$700",
				"href": "index.html"
			}
		},
		{ 
			"sku" : "14",
			"item" : {
				"title" : "Etagere Bookcase",
				"url" :"./images/ideas/preview/sku-14.jpg",
				"price" : "$112",
				"href": "index.html"
			}
		},
	
		{ 
			"sku" : "15",
			"item" : {
				"title" : "Brand Sofa",
				"url" :"./images/ideas/preview/sku-15.jpg",
				"price" : "$700",
				"href": "index.html"
			}
		},
		{ 
			"sku" : "16",
			"item" : {
				"title" : "Palm Plant",
				"url" :"./images/ideas/preview/sku-16.jpg",
				"price" : "$90",
				"href": "index.html"
			}
		},
		{ 
			"sku" : "17",
			"item" : {
				"title" : "Drawer Accent Chest",
				"url" :"./images/ideas/preview/sku-17.jpg",
				"price" : "$599",
				"href": "index.html"
			}
		},
		{ 
			"sku" : "18",
			"item" : {
				"title" : "Coffee Table",
				"url" :"./images/ideas/preview/sku-18.jpg",
				"price" : "$112",
				"href": "index.html"
			}
		},
	
		{ 
			"sku" : "19",
			"item" : {
				"title" : "Tray Table",
				"url" :"./images/ideas/preview/sku-19.jpg",
				"price" : "$700",
				"href": "index.html"
			}
		},
		{ 
			"sku" : "20",
			"item" : {
				"title" : "White Bookcases",
				"url" :"./images/ideas/preview/sku-20.jpg",
				"price" : "$90",
				"href": "index.html"
			}
		},
		{ 
			"sku" : "21",
			"item" : {
				"title" : "Bascket Chair",
				"url" :"./images/ideas/preview/sku-21.jpg",
				"price" : "$102",
				"href": "index.html"
			}
		},
	] 
	if($('.product-tag').length){
		setTags();
	
		$(function() {
			$('.product-tag').each(function(i, obj) {
				var sku = $(this).data('sku');
				var item = findSku(tagsInfo, sku);
				var itemTitle = item.title,
					itemUrl = item.url,
					itemHref = item.href,
					itemPrice = item.price;
				//console.log(itemTitle + ',' +itemPrice + ',' +itemUrl + ',' +itemHref);
	
				var itemHtml = '<div class="tag-wrap">'+
				'<img src="'+ itemUrl +'"  class="tag-img" alt="img"/>'+
				'<div class="tag-text-wrap">'+
				'<h6 class="tag-title">'+itemTitle+'</h6>'+
				'<div class="price-row">'+
				'<p class="tag-price">'+itemPrice+'</p>'+
				'<a href="'+itemHref+'" target="_blank" class="tag-link">Detail</a>'+
				'</div>'+
				'<a href="#0" class="btn btn-ltv"><span>Add to cart</span></a>'
				'</div></div>';
	
				var options = {
					content: itemHtml,
					html: true,
					trigger: 'click'
				}
				$(this).popover(options);
			});
		});
	
		$('.product-tag').on('show.bs.popover', function () {
			$(this).addClass('close-icon').siblings('.product-tag').popover('hide');
		});
	
		$('.product-tag').on('hidden.bs.popover', function () {
			$(this).removeClass('close-icon');
		});
	
		ideas.on('changed.owl.carousel', function(event) {
			$('.product-tag').popover('hide');
		})
		//hide  popover on empty space's click
		$(document).on('click', function(e) {
			var target = e.target; 
			if (!$(target).is('.product-tag') ) {
				$('.product-tag').popover('hide');
			}
		})
	
		$('.toogle-tags').on('click', function(){
			$('.product-tag').fadeToggle( 0.5, function(){
				if ($(this).prop("style")["display"] !== 'none'){
					$('.toogle-tags').text('Hide Tags');
				}else{
					$('.toogle-tags').text('Show Tags');
				}
			});
		})
	}
	
	function setTags(){
		$('.active .product-tag').each(function(){
			var coordX = $(this).data('x'),
				coordY = $(this).data('y');
	
			// set coorditats
			$(this).css({
				'top': coordY + '%',
				'left': coordX + '%'
			});
		})	
	}
	
	//Finding Sku in tagsInfo
	function findSku(data, skuToLookFor) {
		var itemsArray = data;
		for (var i = 0; i < itemsArray.length; i++) {
			if (itemsArray[i].sku == skuToLookFor) {
				return(itemsArray[i].item);
			}
		}
	}
	
	//Price Slider
	$("#price-slider").slider({
		min: 0,
		max: 1000,
		values: [0,1000],
		range: true,
		stop: function(event, ui) {
			$("input#minCost").val($("#price-slider").slider("values",0));
			$("input#maxCost").val($("#price-slider").slider("values",1));
	    },
	    slide: function(event, ui){
			$("input#minCost").val($("#price-slider").slider("values",0));
			$("input#maxCost").val($("#price-slider").slider("values",1));
	    }
	});
	
	$("input#minCost").change(function(){
		var value1 = $("input#minCost").val();
		var value2 = $("input#maxCost").val();
	
		if(parseInt(value1) > parseInt(value2)){
			value1 = value2;
			$("input#minCost").val(value1);
		}
		$("#price-slider").slider("values",0,value1);	
	});
	
		
	$("input#maxCost").change(function(){
		var value1=$("input#minCost").val();
		var value2=$("input#maxCost").val();
		
		if (value2 > 1000) { value2 = 1000; $("input#maxCost").val(1000)}
	
		if(parseInt(value1) > parseInt(value2)){
			value2 = value1;
			$("input#maxCost").val(value2);
		}
		$("#price-slider").slider("values", 1, value2);
	});
	
	//collapse filter--------------------------------------------------
	$('.sidebar-shop').on('hidden.bs.collapse', function () {
		$('#collapse-filter').text('Show Filter');
	})
	
	$('.sidebar-shop').on('shown.bs.collapse', function () {
		$('#collapse-filter').text('Collapse Filter');
		//scrolling to Top
		var pageHeader = parseInt($('.page-header-shop').height());
		var nav = parseInt($('#shop-top-nav-horizontal').height());
		$("html, body").animate({ 
			scrollTop: pageHeader + nav
		}, 1500);
	})
	
	if($('.filter-btn-wrap').length){
		$(window).on('scroll', function(){
			var pageHeader = parseInt($('.page-header-shop').height());
			var nav = parseInt($('#shop-top-nav-horizontal').height());
	
			if ($(this).scrollTop() > pageHeader + nav) {
				$('.filter-btn-wrap').addClass('filter-fixed-top');
	
			} else {
				$('.filter-btn-wrap').removeClass('filter-fixed-top');
			}
		});
	}
	
	//show by--------------------------------------------------------
	$('li[data-col]').on('click', function(){
		var number = $(this).attr('data-col');
		var newClass;
		if(number == 2){
			var newClass = 'col-lg-6 col-md-6 col-sm-12';
		}else if(number == 3){
			var newClass = 'col-lg-4 col-md-6 col-sm-12';
		}else if(number == 4){
			var newClass = 'col-lg-3 col-md-6 col-sm-12';
		}
	
		$('.products-grid [class^="col-"]').each(function(index, elem){
			var classes = $(elem).attr("class");
			$(elem).removeClass(classes).addClass(newClass);
		}, newClass);
		
	})
	
	// count up / down-------------------------------------------------------
	$(".qty-btn").on("click", function() {
		var $button = $(this);
		var oldValue = $button.parent().find("input").val();
	
		if ($button.hasClass('qty-btn-up')) {
			var newVal = parseFloat(oldValue) + 1;
			var max = $button.parent().find("input").attr('max'); //max value 
			if(newVal > max){
				newVal = 99;
			}
		} else if($button.hasClass('qty-btn-down')){
			var min = $button.parent().find("input").attr('min'); //min value 
			var newVal = parseFloat(oldValue) - 1;
			if(newVal < min){
				newVal = 1;
			}
		}
	
		$button.parent().find("input").val(newVal);
	});
	//Product Gallery----------------------------------------------------
	$('.product-gallery').Chocolat({
		loop: true
	});
	
	//product gallery owl carousel---------------------------------------------
	productGalleryOwl();
	$(window).on('resize', function(){
		productGalleryOwl();
	});
	
	function productGalleryOwl(){
		var w_width = $(window).width();
		if(w_width < 992){
			var productGal = $('.product-gallery');
			productGal.addClass('owl-carousel owl-theme');
			var params ={
				nav:true,
				dots: true,
				dotsEach: true,
				loop: true,
				onInitialized: initOwlDot,
				onChange: owlActiveLoad,
				responsive: {
					0:{
						items: 1 
					}
				}
			}
			productGal.owlCarousel(params);
			
		}else{
			if($('.product-gallery').length){
				$('.product-gallery').trigger('destroy.owl.carousel');
			}else{
				return;
			}
		}	
	}
	function initOwlDot(){
		var dot = $('.product-gallery .owl-dot');
		dot.each(function() {
			var index = $(this).index() + 1;
			if(index < 10){
				$(this).html('0').append(index);
			}else{
				$(this).html(index);
			}
		}); 
	}
	
	function owlActiveLoad(event) {
		var $this = $(event.target).find("img[data-src]");
		var src = $this.data('src');
		$this.attr('src', src);
	}
	
	//Product Additional Gallery--------------------------------------
	$(".product-additional-gallery").justifiedGallery({
		rowHeight: 200,
		lastRow: 'justify',
		margins: 10,
		captions: false,
		randomize: false
	});
	
	
	//Register Link----------------------------------------------------
	
	$('#register-link[href="#pills-register"]').on('click', function (e) {
		e.preventDefault();
		$('#register-tab').tab('show');
	})
	
	//Nice select--------------------------------------------------------
	$('select').niceSelect();
	
	//ideas height-------------------------------------------------------
	
	if($('.ideas').length){
		ideasRacio();
		$(window).on('resize', function(){
			ideasRacio();
		});
		ideas.on("resized.owl.carousel", function(e) {
			ideasRacio();
		})
	}
	
	function ideasRacio(){
		var imgHeight = $('#ideas-carousel .active').find('img').height(),
			header = $('.ideas .header').height(),
			topOffset = header + convertRemToPixels(4),
			carouselHeight = imgHeight + convertRemToPixels(3),
			whiteDiv = imgHeight + header + convertRemToPixels(1),
			greenDiv = imgHeight + header + convertRemToPixels(3);
	
		//console.log('img:' + imgHeight+ ', header:' + header + ', baseline:' + convertRemToPixels(1) + ', white:' + whiteDiv + ', green:' +greenDiv);
		$('.ideas').height(greenDiv); //green bg div
		$('.ideas-wrap').height(whiteDiv); //white bg div
		$('#ideas-carousel').css({'top': topOffset, 'height': carouselHeight});
	}
	
	function convertRemToPixels(rem) { // to $baseline rem * 1.8
	    return rem * 1.8 * parseFloat(getComputedStyle(document.documentElement).fontSize);
	}
	
	
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



