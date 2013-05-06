$(function() {
  $('.error').hide();
  
  $(".button").click(function() {
		// validate and process form
		// first hide any error messages
    $('.error').hide();
		
	  var name = $("input#name").val();
		if (name == "") {
      $("label#name_error").show();
      $("input#name").focus();
      return false;
    }
	var email = $("input#email").val();
		if (email == "") {
      $("label#email_error").show();
      $("input#email").focus();
      return false;
    }
	var phone = $("input#phone").val();
		if (phone == "") {
      $("label#phone_error").show();
      $("input#phone").focus();
      return false;
    }
	var message = document.getElementById('message').value;
		if (message == "") {
      $("label#message_error").show();
      $("input#message").focus();
      return false;
    }
	var subject = $("input#subject").val();
		
		var dataString = 'name='+ name + '&email=' + email + '&phone=' + phone + '&subject=' + subject + '&message=' + message;
		//alert (dataString);return false;
		
		$.ajax({
      type: "POST",
      url: "mail.php",
      data: dataString,
      success: function() {
        $('#contact').html("<div id='sent_message'></div>");
        $('#sent_message').html("<h2>Thanks For Your Interest!</h2>")
        .append("<h3>We will get back to you soon.</h3>")
        .hide()
        .fadeIn(1500, function() {
          $('#sent_message').append("<img id='checkmark' src='images/check.png' />");
        });
      }
     });
    return false;
	});
});
runOnLoad(function(){
  $("input#name").select().focus();
});
