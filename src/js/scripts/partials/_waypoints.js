//Waypoints animation -------------------------------------------------------
//statistic's counters
$('.is-animated').waypoint({
	handler: function() {
		var animation_name = $(this.element).data('animation');
		if(animation_name){
			$(this.element).addClass(animation_name);
		}
		initStatCounter(); 
	},
	offset: function() {
		return Waypoint.viewportHeight();
	}
});

//animate.css
var waypoints = $('.animated').waypoint(function(direction) {
	var animation_name = $(this.element).data('animation');
	var animation_delay = $(this.element).data('delay');
	var animation_duration = $(this.element).data('duration');

	if(animation_name){
		$(this.element).addClass(animation_name).removeAttr('data-animation');
	}

	if(animation_delay){
		$(this.element).css({
			'animation-delay': animation_delay + 's'
		}).removeAttr('data-delay');
	}

	if(animation_duration){
		$(this.element).css({
			'animation-duration': animation_duration + 's'
		}).removeAttr('data-duration');
	}

	// $(this.element).removeClass('animated');
},{
	offset: function() {
		return Waypoint.viewportHeight();
	}
})

$(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
        var waypoint1 = $('.has-animation').waypoint({
			offset: function() {
				return Waypoint.viewportHeight();
			},
			handler: function(direction) {
			  $(this.element).addClass('animate-in');
			}
		})
    }
});






