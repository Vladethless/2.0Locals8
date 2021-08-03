//Statiscic's counters-------------------------------------------------------
function initStatCounter(){
	$('.count').each(function() {
		var $this = $(this),
				countTo = $this.attr('data-count');
		$this.text(0);
		$({ countNum: $this.text()}).animate({
			countNum: countTo
			},{
				duration: 4000,
				easing: 'linear',
				step: function() {
					$this.text(Math.floor(this.countNum));
				},
				complete: function() {
					$this.text(this.countNum);
				}
		});
	});
}; 