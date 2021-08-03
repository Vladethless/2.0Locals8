//Steps with background -----------------------------------------------------
if($('#steps-bg').length){
	// initNumCounterTabs();
	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		initNumCounterTabs($(e.target));
		$('.tab-pane.active').find('img[data-src]').lazyLoadXT({show: true});
	})
}