
//live key 6LdZpQcUAAAAABja2fSPC4UkkjQPHIYqhFGgHlf1
//test key 6LeE8REUAAAAAN6HhdwPkCVO7OjigSzD7vSQeWvF

	// Get the form.
var form = $('#ajax-contact');

	// Get the messages div.
	var formMessages = $('.formMessages');
	
	var spinner = $('.spinner');
	
	var submit = $('.submit');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
        
		// Stop the browser from submitting the form.
		e.preventDefault();
		
		//display the cog animation
		$(spinner).removeClass('hidden');
        
		//hide the submit button
		$(submit).addClass('hidden');

		
		formdata = {};
		formdata["textbox"] = $(".textbox").val();
		formdata["name"] = $('.name').val();
		formdata["phone"] = $('.phone').val();
		formdata["email"] = $('.email').val();
		var x = 
		{
			"formdata" : formdata,
			"captchaResponse" : $("#g-recaptcha-response").val()
		};
		//jsonString = jsonObj+formdata;
		var y = JSON.stringify(x);
		//console.log(y);
		//var result = jQuery.parseJSON(y);
		//console.log(result);


		// Serialize the form data.
		//var formData = $(form).serialize();

		// Submit the form using AJAX.
		$.ajax({
			type: 'post',
			url: '/assets/php/sendjs.php' ,
			//url: $(form).attr('action'),
			data: y,
			contentType: "application/json; charset=utf-8",
			traditional: true,
			success: function (response) {
                		if(response=="Thank You! Your message has been sent.")
                		{
					//remove the button animations
					$('.g-recaptcha').addClass('hidden');
                    $(spinner).addClass('hidden');
                	$(formMessages).removeClass('error');
					$(formMessages).addClass('success');
                    // Clear the form.
					$('.textbox').val('');
                	$('.name').val('');
					$('.email').val('');
					$('.phone').val('');
					
                		}
                		else
                		{
                	$(formMessages).removeClass('success');
					$(formMessages).addClass('error');
					$(spinner).addClass('hidden');
					$(submit).removeClass('hidden');
                		}
                		
				$(formMessages).text(response);
                		
            			}
			
		});
		//.done(function(response) {
		//	console.log(response);
			// Make sure that the formMessages div has the 'success' class.
			//$(formMessages).removeClass('error');
			//$(formMessages).addClass('success');

			// Set the message text.
			//$(formMessages).text(response);

			// Clear the form. Temporarily diabled while developing
			//$('#name').val('');
			//$('#email').val('');
			//$('#message').val('');
		//})
	

	});