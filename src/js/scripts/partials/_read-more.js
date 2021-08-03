//Button Text Animation------------------------------------------------------
initReadMoreText();
function initReadMoreText(){
	var read_more = $('.read-more span, .btn span, .tag span, .plan-select a span, .btn-plan span');   
	read_more.each(function() {
	  var text = $(this).text();
	  $(this).attr('data-after',text);
	})
}