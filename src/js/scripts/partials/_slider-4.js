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

