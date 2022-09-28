<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Profile</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link href="style.css" rel="stylesheet">
</head>

<body>

    <?php 
       session_start();
       if (!isset($_SESSION["username"])){
          header("Location: login.php");
       }
       if (isset($_POST["logout"])){
            session_unset();
            header("Location:index.php");
       }
    ?>
    <div id="myHeader"></div>

    <div class="content" style="color:#bdf2e2;">
        <div class="profile-container">
            <div class="user-info">

                <div class="profile-photo">
                    <img src="./img/rat.jpg">
                </div>

                <div class="user-info-text">
                    <div class="username">
                        <h4><?php echo $_SESSION["username"] ?></h4>
                    </div>
                    <div class="star-review">
                        <?php 
                            $stars = $_SESSION["rating"];
                            for ($i = 0; $i < 5; $i++){
                                if ($stars > 0) {
                                    ?><i class="fa fa-star checked"></i><?php
                                    $stars -= 1;
                                } else {
                                    ?><i class="fa fa-star"></i><?php
                                }
                            }
                        ?>
                    </div>
                    <div class="last-seen">
                        <form method="post">
                        <!--<p>Last seen on ....</p>*/ -->
                        <button type="submit" name="logout" class="btnSubmit">Logout</button>
                    </div>
                </div>
            </div>
            <div class="user-purchases">
                <div class="section-title">
                    <h1>My purchases</h1>
                </div>
                <div class="purchase-list">

                </div>
            </div>
            <div class="user-feedback">
                <div class="section-title">
                    <h1>Reviews</h1>
                </div>
                <div class="feedback-table row">
                    <table>
                        <tr>
                            <th style="width: 20%;">User</th>
                            <th style="width: 60%;">Description</th>
                            <th style="width: 20%;">Rating</th>
                        </tr>

                        <tr>
                            <td>John Smith</td>
                            <td>Kruts džeks</td>
                            <td>
                                <div id="starRating" class="star-review col-3">
                                    <i class="fa fa-star checked"></i>
                                    <i class="fa fa-star checked"></i>
                                    <i class="fa fa-star checked"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                            </td>
                        </tr>

                    </table>
                </div>
            </div>
        </div>
    </div>

    <div id="myFooter"></div>
    <script src="js/main.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"></script>
</body>

</html>