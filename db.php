<?php
$servername = "mouse.db.elephantsql.com";
$dbUsername = "yogblwsn";
$dbPassword = "Y7W55OMonYfWrDAhBQp70cDTGHZCysiU";

try {
    $conn = new PDO("pgsql:host=$servername;dbname=$dbUsername", $dbUsername, $dbPassword);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    #echo "Connected successfully";
  } catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
  }
?>