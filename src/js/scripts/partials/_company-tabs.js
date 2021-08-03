//Tabs-----------------------------------------------------------------------
if($('#company-tabs').length){
	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		var imgClass = $(e.target).data('img');
		$('.tab-img').attr('data-bgimg', imgClass);
		$('.tab-img').fadeIn('slow');
		initNumCounterTabs($(e.target));
	})
}

function initNumCounterTabs(el){
	var tabs = el.parents('.tabs').attr('id');
	var totalItems = $('#' + tabs +' '+'.nav-link').length;
	var currentIndex = $('#' + tabs +' '+'.nav-link').index(el) + 1;
	$('#' + tabs +' '+'.current-tab').text(currentIndex);
	$('#' + tabs +' ' +'.number-tabs').text(totalItems);
}