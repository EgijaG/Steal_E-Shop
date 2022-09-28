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
    <form action="" method = "POST">
        <div class="login-form">
            <h2>Welcome to the stealing party.. Let's get you signed up!</h2>
            <input class="input" label="Username" name="username" id="username" placeholder="Username" type="text" required="required"/>
            <input class="input" label="E-mail" name="email" id="email" placeholder="E-mail" type="email" required/>
            <input class="input" label="Password" name="password" id="password" placeholder="Password" type="password" />
            <input class="input" label="Password" name="repeat-password" id="repeat-password" placeholder="Repeat password" type="password" />
            <input class="input" label="Address" name="address" id="address" placeholder="Address" type="text" required />
            <input class="input" label="Phone Number" name="phone-number" id="phone-number" placeholder="Phone Number" type="tel"
                required />
            <input class="input" label="Country" name="country" id="country" placeholder="Country" type="text" required />
            <input type="checkbox" name="reg-checkbox" id="reg-checkbox">Agree with terms and conditions</input>
            <button class="btnSubmit" type="submit" name="submit">Log in</button>
            <p style=" font-size: medium;">Already have an account? <a href="./login.html">Log in!</a></p>
        </div>
    </div>
    <div id="myFooter"></div>
    <script type="text/javascript" src="./js/main.js"></script>
</body>
<?php
    include "db.php";
    if (isset($_POST['submit'])) {
        $user = $_POST["username"];
        $email = $_POST["email"];
        $password = $_POST["password"];
        $address = $_POST["address"];
        $phoneNr = $_POST["phone-number"];
        $country = $_POST["country"];

        $sql = "INSERT INTO users(username, password, email, number, address, country)
        VALUES ('$user', '$password', '$email', '$phoneNr', '$address', '$country')";
        $conn->exec($sql);
        header("Location: index.php");
    }
?>

</html>