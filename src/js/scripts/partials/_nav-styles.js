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