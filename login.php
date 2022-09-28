<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Log in</title>
  <link href="style.css" rel="stylesheet">
</head>

<body>
  <div id="myHeader"></div>
  <div class="content">
  <form action="" method = "POST">
    <div class="login-form">
      <h2>Welcome to the stealing party.. Let's get you logged in!</h2>
      <input class="input" label="E-mail" name="email" id="email" placeholder="E-mail" type="email" />
      <input class="input" label="Password" name="password" id="password" placeholder="Password" type="password" />
      <button type="submit" name="submit" class="btnSubmit">Log in</button>
      <p style="font-size: medium;">Don't have an account? <a href="./signup.php">Sign up!</a></p>
    </div>
  </div>
  <div id="myFooter"></div>
  <script type="text/javascript" src="./js/main.js"></script>
</body>

<?php
  include "db.php";
    if (isset($_POST['submit'])) {
    $sql = "SELECT username, email, rating, lastseen, password FROM users";

    try{
      $res = $conn->prepare($sql);
      $res->execute();
    }catch(PDOException $e){
      echo "Querry error!";
      die();
    }
    $rows = $res->fetchAll(PDO::FETCH_ASSOC);
    foreach ($rows as $row){
      if ($row["email"] == $_POST["email"] && $row["password"] == $_POST["password"]) {
        session_start();
        $_SESSION["username"] = $row["username"];
        $_SESSION["rating"] = $row["rating"];
        $_SESSION["email"] = $row["email"];
        header("Location: index.php");
      }
    }
}

?>
</html>