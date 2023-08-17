$(document).ready(function () {
  
   //validation for Full Name
   $('.error-text').text('');
   $('#firstName').on('input', function () {
    
      var firstName = $(this).val();
      var validName = /^[a-zA-Z ]*$/;
      if (firstName.length == 0) {
   
         $('.first-name-msg').addClass('invalid-msg').text("Full name is required");
         $(this).addClass('invalid-input').removeClass('valid-input');
         
      }
      else if (!validName.test(firstName)) {
   
         $('.first-name-msg').addClass('invalid-msg').text('Only characters & Whitespace are allowed');
         $(this).addClass('invalid-input').removeClass('valid-input');
         
      }
      else {

         $('.first-name-msg').empty();
         $(this).addClass('valid-input').removeClass('invalid-input');

      }
   });
     
   // valiadtion for Email
   $('#email').on('input', function () {
   
      var emailAddress = $(this).val();
      var validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      
      if (emailAddress.length == 0) {
      
         $('.email-msg').addClass('invalid-msg').text('Email is required');
         $(this).addClass('invalid-input').removeClass('valid-input');
         $('.error-text').text('');

      }
      else if (!validEmail.test(emailAddress)) {
   
         $('.email-msg').addClass('invalid-msg').text('Invalid email address');
         $(this).addClass('invalid-input').removeClass('valid-input');
         $('.error-text').text('');

      }
      else {

         $('.email-msg').empty();
         $(this).addClass('valid-input').removeClass('invalid-input');
         $('.error-text').text('');

      }
   });
    
   // valiadtion for Password
   $('#password').on('input', function () {
    
      var password = $(this).val();
      var cpassword = $('#cpassword').val();
   
      var uppercasePassword = /(?=.*?[A-Z])/;
      var lowercasePassword = /(?=.*?[a-z])/;
      var digitPassword = /(?=.*?[0-9])/;
      var spacesPassword = /^$|\s+/;
      var symbolPassword = /(?=.*?[#?!@$%^&*-])/;
      var minEightPassword = /.{6,}/;
    
      if (password.length == 0) {
      
         $('.password-msg').addClass('invalid-msg').text('Password is required');
         $(this).addClass('invalid-input').removeClass('valid-input');

      }
      else if (!uppercasePassword.test(password)) {
      
         $('.password-msg').addClass('invalid-msg').text('At least one uppercase');
         $(this).addClass('invalid-input').removeClass('valid-input');

      }
      else if (!lowercasePassword.test(password)) {
      
         $('.password-msg').addClass('invalid-msg').text('At least one lowercase');
         $(this).addClass('invalid-input').removeClass('valid-input');

      }
      else if (!digitPassword.test(password)) {
      
         $('.password-msg').addClass('invalid-msg').text('At least one digit');
         $(this).addClass('invalid-input').removeClass('valid-input');

      
      } else if (!symbolPassword.test(password)) {
      
         $('.password-msg').addClass('invalid-msg').text('At least one special character');
         $(this).addClass('invalid-input').removeClass('valid-input');

      }
      else if (spacesPassword.test(password)) {
      
         $('.password-msg').addClass('invalid-msg').text('Whitespaces are not allowed');
         $(this).addClass('invalid-input').removeClass('valid-input');

      }
      else if (!minEightPassword.test(password)) {
      
         $('.password-msg').addClass('invalid-msg').text('At least 6 characters');
         $(this).addClass('invalid-input').removeClass('valid-input');

      }
      else if(cpassword.length>0) {
         if(password!=cpassword){
      
            $('.cpassword-msg').addClass('invalid-msg').text('Must be matched');
            $('#cpassword').addClass('invalid-input').removeClass('valid-input');
         
         }
         else
         {
            $('.cpassword-msg').empty();
            $('#cpassword').addClass('valid-input').removeClass('invalid-input');
         }
         $('#password').addClass('valid-input').removeClass('invalid-input');
         $('.password-msg').empty();
      } 
      else {
         $('.password-msg').empty();
         $(this).addClass('valid-input').removeClass('invalid-input');
      }
   });
    
   // valiadtion for Confirm Password
   $('#cpassword').on('input', function () {
   
      var password = $('#password').val();
      var cpassword = $(this).val();
   
      if (cpassword.length == 0) {

         $('.cpassword-msg').addClass('invalid-msg').text('Confirm password is required');
         $(this).addClass('invalid-input').removeClass('valid-input');

      }
      else if(cpassword != password) {

         $('.cpassword-msg').addClass('invalid-msg').text('Must be matched');
         $(this).addClass('invalid-input').removeClass('valid-input');
         
      } 
      else {

         $('.cpassword-msg').empty();
         $(this).addClass('valid-input').removeClass('invalid-input');

      }
   });
    
   // validation to submit the form
   $('input').on('input',function(e){
      if($('#myForm').find('.valid-input').length==4){
   
         $('#submit-btn').removeClass('allowed-submit');
         $('#submit-btn').removeAttr('disabled');

      }
      else{

         e.preventDefault();
         $('#submit-btn').addClass('allowed-submit');
         $('#submit-btn').attr('disabled','disabled')
         $('.error-text').text('');
           
      }
   });

   // Function to update password strength indicator
   function updateStrengthIndicator(password) {
      var strength = 0;

      if (password.length >= 8) {
          strength += 1;
      }

      if (password.match(/[a-z]/) && password.match(/[A-Z]/)) {
          strength += 1;
      }

      if (password.match(/[0-9]/)) {
          strength += 1;
      }

      if (password.match(/[$@#&!]/)) {
          strength += 1;
      }

      var indicator = $("#password-strength .strength-indicator");
      var strengthText = "";
      var strengthClass = "";

      switch (strength) {
          case 0:
          case 1:
              strengthText = "Weak";
              strengthClass = "text-danger";
              break;
          case 2:
              strengthText = "Medium";
              strengthClass = "text-warning";
              break;
          case 3:
          case 4:
              strengthText = "Strong";
              strengthClass = "text-success";
              break;
      }

      indicator.text(strengthText);
      indicator.removeClass("text-danger text-warning text-success").addClass(strengthClass);

      // Show the password strength indicator if the password field is not empty
      if (password.length > 0) {
         $("#password-strength").show();
      } else {
         $("#password-strength").hide();
      }
   }

   // Password input event listener
   $("#password").on("input", function() {
      var password = $(this).val();
      updateStrengthIndicator(password);
   });

   // Password Hide and show 
   jQuery(".toggle-hide-show").click(function() {
      jQuery(this).toggleClass("fa-eye fa-eye-slash");
      input = jQuery(this).parent().find("input");
      if (input.attr("type") == "password") {
          input.attr("type", "text");
      } else {
          input.attr("type", "password");
      }
  });

   // Confirm Password Hide and show 
   jQuery(".password-confirmation-toggle-hide-show").click(function() {
      jQuery(this).toggleClass("fa-eye fa-eye-slash");
      input = jQuery(this).parent().find("input");
      if (input.attr("type") == "password") {
          input.attr("type", "text");
      } else {
          input.attr("type", "password");
      }
  });

   // Form Submittion
   $("#myForm").on("submit", function(event) {
      event.preventDefault(); // Prevent the form from submitting normally
      var form = $(this); // Reference to the form element

      // Serialize form data
      var formData = $(this).serialize();

      // Send an AJAX request
      $.ajax({
         type: "POST",
         url: "users",
         data: formData,
         success: function(response) {
            // Display a success toast
            Toastify({
               text: "User created successfully!",
               duration: 3000, // Duration in milliseconds
               gravity: "top", // Position: "top", "bottom", "left", "right"
               position: "right", // Position: "left", "center", "right"
               backgroundColor: "green",
            }).showToast();
            
            // Clear the form fields
            form.trigger("reset");
            $("#password-strength").hide();
            $('.error-text').text('');

            $('#submit-btn').addClass('allowed-submit');
            $('#submit-btn').attr('disabled','disabled');
         },
         error:function(data)
         {
            for(err in data.responseJSON.errors) {
               $('.error_' + err).text(data.responseJSON.errors[err]);
            }
         }
      });
   });
 
});