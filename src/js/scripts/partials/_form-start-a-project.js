//Start-a-Project Form---------------------------------------------------
  //sap handler
  $('#start-a-project').validator().on('submit', function (event) {
    if (event.isDefaultPrevented()) {
      formSAPError('Error');
    } else {
      event.preventDefault();
      submitSAPForm();
    }
  });

  function submitSAPForm(){
    // get values from checkboxes
    var checked_services = $('input[name=services]:checked').map(function() {
      return this.value;
    }).get().join(','); 

    // get form values and compose a data string
    var firstname = $('#sap-first-name').val();
    var lastname = $('#sap-last-name').val();
    var email = $('#sap-email').val();
    var phone = $('#sap-phone').val();
    var company = $('#sap-company').val();
    var website = $('#sap-website').val();
    var message = $('#sap-message').val();
    var data ='name=' + firstname +' '+ lastname +  '&email=' + email + '&phone=' + phone + 
    '&company=' + company + '&website=' + website + '&message=' + message + '&checked_services=' + checked_services; 
    
    //AJAX call passing dataString in POST
    $.ajax({
      type: 'POST',
      data: data,
      url: 'php/start-a-project.php',
      success : function(){
        formSAPSuccess();
      },
      error: function(text){
        formSAPError(text);
      }
    })

    function formSAPSuccess(){
      $('body').append(git_modal);
      $('#git-modal-title h5').text('Thank you for your message!');
      $('#git-modal .modal-body p').text('Your project is successualy started! We will contact you shortly.');
      $('#git-modal').modal('show');
      $("#start-a-project")[0].reset();
      $('button[type=submit').attr({
          "data-original-title": "Please, fill all required fields!"
      });
    }

    function formSAPError(text){
      $('body').append(git_modal);
      $('#git-modal-title h5').text('Sorry an error occurred!');
      $('#git-modal .modal-body p').text('Please try again, Sorry for the trouble.');
      $('#git-modal').modal('show');
      $("button[type=sub]")[0].reset();
      $('button[type=submit').attr({
          "data-original-title": "Please, fill all required fields!"
      });
    }
  }  