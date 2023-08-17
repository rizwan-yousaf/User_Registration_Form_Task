<!DOCTYPE html>
<html>
<head>
    <title>Job Task</title>
    <META NAME="ROBOTS" CONTENT="NOINDEX, NOFOLLOW">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
      integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg=="
      crossorigin="anonymous"
    />
    <link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>

    <div class="container">
        <div class = "validation-form">

            <form method = "post" id="myForm">
                @csrf
                <h3>My Job Task</h3>

                <div class="form-group">
                    <label for="name">Full Name <span class="required-sign">*</span></label>
                    <input type="text" class="form-control" placeholder="Full Name"  id="firstName" name="name">
                    <div class="first-name-msg"></div>
                </div>
        
                <div class="form-group">
                    <label for="email">Email Address  <span class="required-sign">*</span></label>
                    <input type="text" class="form-control" placeholder="Email Address" id="email" name="email">
                    <div class="email-msg"></div>
                    <span class="text-danger error_email error-text"></span>
                </div>
                    
                <div class="form-group">
                    <label for="password">Password <span class="required-sign">*</span></label>
                    <div class="password-input">
                        <input type="password" class="form-control" placeholder="Password" id="password" minlength="6" name="password">
                        <i class="toggle-hide-show fa fa-fw fa-eye-slash"></i>
                    </div>
                    <div class="password-msg"></div>
                    <div class="password-strength" id="password-strength" style="display: none;">
                        Password Strength: <span class="strength-indicator"></span>
                    </div>
                </div>

                <div class="form-group">
                    <label for="confirmPassword">Confirm Password <span class="required-sign">*</span></label>
                    <div class="password-input">
                        <input type="password" class="form-control" placeholder="Confirm Password" id="cpassword" name="password_confirmation"> <i class="password-confirmation-toggle-hide-show fa fa-fw fa-eye-slash"></i>
                    </div>
                    <div class="cpassword-msg"></div>
                </div>
                    
                <div class="btn-alignment">
                    <input type="submit" value="Submit" id="submit-btn" class="allowed-submit btn-color" disabled="desabled">
                </div>
            </form>

        </div>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/toastify-js"></script>
    <script type="text/javascript" src="js/validate.js"></script>

</body>
</html>