//Default Slider-------------------------------------------------------------
//carousel-indicator active
$('#slider .carousel-item-indicator').on('click', function(){
	if($(this).hasClass('active')) return;
	$(this).addClass('active').siblings().removeClass('active');
})
