<?php require_once "./includes/header.php" ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./assets/css/styles.css">
    <title>HomePage</title>
</head>
<body>      
    <main class="main-section">
        <div class="main-imgsec">
            <button id="home-button-explore">EXPLORE THE CAMPAIGN</button>
        </div>
        <section class="product-section1">
            <h2>ELEGANCE EXPRESS:<br>CLASSIC AND<br>CONTEMPORARY STYLES</h2>
            <div id="product-section">
            </div>
        </section>

        <section class="info-section">
            <div class="info">
                <h2>STEP INTO OUR FASHION BOTIQUE WHERE<br> ELEGANCE MEETS TRENDSETTING STYLE</h2>
                <p>Offering a curated collection of haute couture, timeless classics,<br> and must-have accessories designed to elevate your wardrobe<br>and celebrate your unique sense of fashion.</p>
                <button id="discover">DISCOVER MORE</button>
            </div>
            <div class="info">
                <img src="./assets/images/bag_carrying.jpg" alt="bag_carrrying" id="bag_carrying"/>
            </div>
        </section>
        
        <section class="product-section1">
            <h2>NEW ARRIVALS SPRING SUMMER</h2>
            <div id="product-section-carousel" class="carousel-container">
                <div id="carousel-wrapper" class="carousel-wrapper">
                </div>
            </div>
        </section>
        <section class="design-section">
            <h1>Must-have accessories designed to elevate your wardrobe<br> and celebrate your unique sense of fashion</h1>
            <button id="discover">DISCOVER</button>
        </section>
        
        <section class="blog-section">
            <h2>STYLE STORIES: INSIDE THE FASHION STORE</h2>
            <div class="blog" id="blog-sec"></div>
        </section>
    </main>
    <script src="./assets/js/app.js"></script>
</body>
</html>
<?php require_once "./includes/footer.php" ?>