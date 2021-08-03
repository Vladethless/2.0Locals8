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



