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

