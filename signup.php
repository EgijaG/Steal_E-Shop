<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign up</title>
    <link href="style.css" rel="stylesheet">
</head>

<body>
    <div id="myHeader"></div>
    <div class="content">
        <div class="login-form">
            <h2>Welcome to the stealing party.. Let's get you signed up!</h2>
            <input class="input" label="Username" id="username" placeholder="Username" type="text" required="required" />
            <input class="input" label="E-mail" id="email" placeholder="E-mail" type="email" required />
            <input class="input" label="Password" id="password" placeholder="Password" type="password" />
            <input class="input" label="Password" id="repeat-password" placeholder="Repeat password" type="password" />
            <input class="input" label="Address" id="address" placeholder="Address" type="text" required />
            <input class="input" label="Phone Number" id="phone-number" placeholder="Phone Number" type="tel" required />
            <input class="input" label="Country" id="country" placeholder="Country" type="text" required />
            <button class="btnSubmit" >Sign Up</button>
            <p style=" font-size: medium;">Already have an account? <a href="./login.php">Log in!</a></p>
        </div>
    </div>
    <div id="myFooter"></div>
    <script type="text/javascript" src="./js/main.js"></script>
</body>

</html>