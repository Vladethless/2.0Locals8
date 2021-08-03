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
