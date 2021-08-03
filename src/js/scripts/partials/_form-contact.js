//contact-form --------------------------------------------------------------
//contact-form's handler
$("#get-in-touch").validator()
.on('submit', function (event) {
	if (event.isDefaultPrevented()) {
		formError('Error');
	} else {
		event.preventDefault();
		submitForm();
	}
});

function submitForm(){
	// get form values and compose a data string
	var name = $('#git-name').val();
	var email = $('#git-email').val();
	var message = $('#git-message').val();
	var data ='name=' + name + '&email=' + email + '&message=' + message;

	//AJAX call passing dataString in POST
	$.ajax({
		type: 'POST',
		data: data,
		url: 'php/get-in-touch.php',
		success : function(){
			formSuccess();
		},
		error: function(jqXHR, exception, data) {
				formError();
			}
	})

	function formSuccess(){
		$('body').append(git_modal);
		$('#git-modal-title h5').text('Thank you for your message!');
		$('#git-modal .modal-body p').text('Your message was successualy sent! We will contact you shortly.');
		$('#git-modal').modal('show');
		$("#get-in-touch")[0].reset();
		$('.git-submit-btn').attr({
				"data-original-title": "Please, fill all required fields!"
		});
	}

	function formError(text){
		$('body').append(git_modal);
		$('#git-modal-title h5').text('Sorry an error occurred!');
		$('#git-modal .modal-body p').text('Please try again, Sorry for the trouble.');
		$('#git-modal').modal('show');
		$("#get-in-touch")[0].reset();
		$('.git-submit-btn').attr({
				"data-original-title": "Please, fill all required fields!"
		});
	}
}

//form's classes-------------------------------------------------------------
$('input[type=text]:not([readonly]), input[type=password]:not([readonly]), input[type=email]:not([readonly]), input[type=url]:not([readonly]), input[type=time]:not([readonly]), input[type=date]:not([readonly]), input[type=datetime-local]:not([readonly]), input[type=tel]:not([readonly]), input[type=number]:not([readonly]), input[type=search-md]:not([readonly]), input[type=search]:not([readonly]), textarea:not([readonly])')
.on('focus', function() { 
	 $(this)
		 .parent()
		 .addClass('focus')
		 .siblings()
		 .removeClass('focus');
});

$('input[type=text]:not([readonly]), input[type=password]:not([readonly]), input[type=email]:not([readonly]), input[type=url]:not([readonly]), input[type=time]:not([readonly]), input[type=date]:not([readonly]), input[type=datetime-local]:not([readonly]), input[type=tel]:not([readonly]), input[type=number]:not([readonly]), input[type=search-md]:not([readonly]), input[type=search]:not([readonly]), textarea:not([readonly])')
.on('focusout', function(){ 
	 $(this).parent().removeClass('focus');
})
