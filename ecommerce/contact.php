<?php require_once "./includes/header.php" ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./assets/css/styles.css">
    <title>Contact Us</title>
</head>
<body>
    <section class="about">
        <h1>CONTACT US</h1>
    </section>
    <section class="input-section">
        <h2>CONTACT US ANYTIME</h2>
        <p>Liber iriure vix cu, fugit dicat no qui, posse detraxit has cu ex sint nisl discere te, tibique blandit urbanitas</p>
        <form action="./includes/MVC/fashion_control.php" method="POST">
            <input type="text" name="fname" placeholder="Name*" required />
            <input type="email" name="email" placeholder="Email*" required />
            <input type="text" name="cmessage" placeholder="Message*" required />
            <button type="submit">SUBMIT</button>
        </form>
        <h4>STORE OF ACCESSORIES</h4>
        <p>Via Giulia 83, 00186 Roma, Italy, Europe</p>
        <p>+ 3 20 6800 1007, + 3 20 6800 1008</p>
        <p>elfrida@example.com</p>

    </section>
    <script src="./assets/css/styles.css"></script>
</body>
</html>
<?php require_once "./includes/footer.php" ?>