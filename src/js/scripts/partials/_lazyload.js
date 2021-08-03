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








