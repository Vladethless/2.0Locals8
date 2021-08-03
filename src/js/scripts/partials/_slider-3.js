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