<?php
    $sharedfolder='../shared/';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../stylesheet/header.css">
    <link rel="stylesheet" href="buynow.css">
    <title>Buy Now</title>
</head>
<body>
    <?php require_once'../shared/header.php'; ?>
        <h3>kindly enter your details</h3>
<<<<<<< HEAD
        <section>
            <form id="form" onsubmit="return verify();" action="#" method="POST">
=======
        <section id="body">
            <form onsubmit="return verify();" action="bought.php" method="POST" id="form">
>>>>>>> b7cf54bae970ec3f025fe6a828c89b26feca9cb5
                <p>
                    <label for="name">Name :</label>
                    <input class="escape" type="text" name="name" onclick="choose(this.id);" id="uname" autocomplete="off" />
                    <span id="username" class="under"></span>

                </p>
                <p>
                    <label for="number">Contact No. :</label>
                    <input class="escape" name="contact" onclick="choose(this.id);" id="num" autocomplete="off" />
                    <span id="phone" class="under"></span>
                </p>
                <p>
                    <label for="email">Email :</label>
                    <input class="escape" placeholder="Optional" name="email" onclick="choose(this.id);" id="mail" autocomplete="off" />
                    <span id="gmail" class="under"></span>
                </p>

                <p>
                    <label for="address">Address :</label>
                    <input class="escape" type="text" name="address" onclick="choose(this.id);" id="add" autocomplete="off" />
                    <span id="loc" class="under"></span>
                </p>
                <p>
                    <label for="landmark">Landmark :</label>
                    <input class="escape" placeholder="Optional" type="text" name="landmark" onclick="choose(this.id);" id="land" autocomplete="off" />
                    <span id="mark" class="under"></span>
                </p>


            </form>  
        </section>
        <div class="order">
<<<<<<< HEAD
            <button form="form">place your order</button>
=======
            <button form="form" value="submit" name="submit">place your order</button>
>>>>>>> b7cf54bae970ec3f025fe6a828c89b26feca9cb5
        </div>

        <div class="rbj">
            <p>our services are limited within rajbiraj</p>
        </div>

        <h4>thanks for shopping !!!</h4>
        <h5>visit again</h5>

</body>
<script src="loginpage.js"></script>
<script src="verifysignup.js"></script>
</html>