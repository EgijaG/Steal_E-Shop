<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ContactUs</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link href="style.css" rel="stylesheet">
</head>
<body>
    <div id="myHeader"></div>

    <div class="d-flex align-items-center justify-content-center">

        <form id="contactForm">
            <h1 class="text-white">Contact Us</h1>

            <div class="mb-3">
            <label class="form-label text-light" for="name">Name</label>
            <input class="form-control" id="name" type="text" placeholder="Name" data-sb-validations="required" />
            </div>

            <div class="mb-3">
            <label class="form-label text-light" for="emailAddress">Email Address</label>
            <input class="form-control" id="emailAddress" type="email" placeholder="Email Address" data-sb-validations="required, email" />
            </div>

            <div class="mb-3">
            <label class="form-label text-light" for="message">Message</label>
            <textarea class="form-control" id="message" type="text" placeholder="Message" style="height: 10rem;" data-sb-validations="required"></textarea>
            </div>

            <div class="d-grid">
            <button class="btn btn-dark btn-lg" type="submit">Submit</button>
            </div>

        </form>

    </div>
    <div id="myFooter"></div>
    <script type="text/javascript" src="./js/main.js"></script>
</body>
</html>