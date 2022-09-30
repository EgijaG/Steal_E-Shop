<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Payment success</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link href="style.css" rel="stylesheet">
</head>

<body onload="renderCategoriesProof()">
    <div id="myHeader"></div>
    <div class="content">
        <div class="login-form">
            <p style="color:green">The payment has been processed correctly..
                Our agents will get in touch with you!
            </p>
            <a href="./profile.php" class="signup"> Go to My Profile</a>
        </div>
        
    </div>

    <div class="content">
        <div class="menu">
            <div class="menu-item col-3">
                <button onclick="scroll('audio')" class="btnSubmit filter">
                    Audio
                </button>
            </div>
            <div class="menu-item col-3">
                <button onclick="scroll('video')" class="btnSubmit filter">
                    Video
                </button>
            </div>
            <div class="menu-item col-3">
                <button onclick="scroll('foto')" class="btnSubmit filter">
                    Foto
                </button>
            </div>
            <div class="menu-item col-3">
                <button class="btnSubmit filter">
                    Citi
                </button>
            </div>
        </div>

        <div class='fuck'></div>

    </div>
    <div id="myFooter"></div>
    <script type="text/javascript" src="./js/main.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

</body>

</html>