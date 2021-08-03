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