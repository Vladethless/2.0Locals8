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