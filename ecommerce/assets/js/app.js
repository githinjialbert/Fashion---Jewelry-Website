const products = [
    {image: "dragonearrings.jpg", alt: "dragon-earrings", name: "EARRINGS", price: "$260" },
    {image: "bronzenecklace.jpg", alt: "bronze-necklace", name: "BRONZE NECKLASE", price: "$260" },
    {image: "necklace.jpg", alt: "necklace", name: "NECKLASE", price: "$260" },
    {image: "weddingring.jpg", alt: "wedding-ring", name: "WEDDING RING", price: "$260"  }
];

const productSection = document.getElementById("product-section");

products.forEach(product => {

    const productDiv = document.createElement("div");
    productDiv.classList.add("product-sec");


    const image = document.createElement("img");
    image.src = `./assets/images/${product.image}`;
    image.alt = product.alt;

    const button = document.createElement("button");
    button.textContent = "ADD TO CART";
    button.classList.add("button");
    button.style.display = "none";

    const name = document.createElement("h5");
    name.textContent = product.name;
    name.classList.add("product-name");

    const price = document.createElement("h7");
    price.textContent = product.price;
    price.classList.add("product-price");

    button.addEventListener("click", () => {
        button.textContent = "VIEW CART";
    });


    productDiv.addEventListener("mouseenter", () => {
        button.style.display = "block";
    });

    productDiv.addEventListener("mouseleave", () => {
        button.style.display = "none";
    });

    productDiv.appendChild(image);
    productDiv.appendChild(name);
    productDiv.appendChild(price);
    productDiv.appendChild(button);

    productSection.appendChild(productDiv);

});

const carouselProducts = [
    {image: "bordeux.jpg", alt: "bordeux", name: "BORDEUX", price: "$320" },
    {image: "redbag.jpg", alt: "redbag", name: "BORDEUX BAG", price: "$320" },
    {image: "purplepurse.jpg", alt: "purplepurse", name: "PURPLE PURSE", price: "$285" },
    {image: "pinkhandbag.jpg", alt: "pinkhandbag", name: "PINK HANDBAG", price: "$300"  },
    {image: "yellowbag.jpg", alt: "yellowbag", name: "YELLOW HANDBAG", price: "$320"  },
    {image: "partypurse.jpg", alt: "partypurse", name: "PARTY PURSE", price: "$300"  },
];

const carouselWrapper = document.getElementById('carousel-wrapper'); 


carouselProducts.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product-sec1');

    const img = document.createElement('img');
    img.src = `./assets/images/${product.image}`;
    img.alt = product.alt;

    const name = document.createElement('h5');
    name.textContent = product.name;

    const price = document.createElement('h7');
    price.textContent = product.price;

    const button = document.createElement("button");
    button.textContent = "ADD TO CART";
    button.classList.add("button");
    button.style.display = "none";

    button.addEventListener("click", () => {
        button.textContent = "VIEW CART";
    });


    productDiv.addEventListener("mouseenter", () => {
        button.style.display = "block";
    });

    productDiv.addEventListener("mouseleave", () => {
        button.style.display = "none";
    });

    productDiv.appendChild(img);
    productDiv.appendChild(name);
    productDiv.appendChild(price);
    productDiv.appendChild(button);

    carouselWrapper.appendChild(productDiv);
});


const slideSpeed = 2000;
let carouselInterval;

const slideCarousel = () => {
    const firstProduct = carouselWrapper.firstElementChild;
    carouselWrapper.style.transition = `transform 1s ease-in-out`;
    carouselWrapper.style.transform = `translateX(-${firstProduct.clientWidth}px)`;

    setTimeout(() => {
        carouselWrapper.style.transition = 'none';
        carouselWrapper.style.transform = `translateX(0)`;
        carouselWrapper.appendChild(firstProduct);
    }, 1000);
};

const startCarousel = () => {
    carouselInterval = setInterval(slideCarousel, slideSpeed);
};

const stopCarousel = () => {
    clearInterval(carouselInterval);
};

const setupCarousel = () => {
    startCarousel();

    carouselWrapper.addEventListener('mouseenter', stopCarousel);
    carouselWrapper.addEventListener('mouseleave', startCarousel);
};

setupCarousel();


const blogItems = [
    { image: "orange.jpg", text: "THE LATEST FASHION TRENDS<br> REDEFINE ELEGANCE, BLENDING<br>STYLE WITH BEAUTY" },
    { image: "home-1-blog-2.jpg", text: "BEAUTY ROUTINES ENHANCE<br>CONFIDENCE, COMPLIMENTING<br>YOUR FASHION CHOICES" },
    { image: "home-1-blog-3.jpg", text: "FASHION AND BEAUTY EVOLVE,<br>REFLECTING CULTURAL<br>INFLUENCES AND CREATIVITY" }
];

const blogSec = document.getElementById("blog-sec");

blogItems.forEach(item => {
    const blogDiv = document.createElement("div");
    blogDiv.classList.add("blog-sec");

    const img = document.createElement("img");
    img.src = `./assets/images/${item.image}`; 
    
    const text = document.createElement("a");
    text.href = "#";
    text.innerHTML = item.text;
     

    blogDiv.appendChild(img);
    blogDiv.appendChild(text);

    blogSec.appendChild(blogDiv);
});

document.addEventListener('DOMContentLoaded', () => {
    const shopProducts = [
        { image: "dragonearrings.jpg", alt: "dragon-earrings", name: "EARRINGS", price: "$260" },
        { image: "bronzenecklace.jpg", alt: "bronze-necklace", name: "BRONZE NECKLACE", price: "$260" },
        { image: "necklace.jpg", alt: "necklace", name: "NECKLACE", price: "$260" },
        { image: "weddingring.jpg", alt: "wedding-ring", name: "WEDDING RING", price: "$260" },
        { image: "bordeux.jpg", alt: "bordeux", name: "BORDEUX", price: "$320" },
        { image: "redbag.jpg", alt: "redbag", name: "BORDEUX BAG", price: "$320" },
        { image: "purplepurse.jpg", alt: "purplepurse", name: "PURPLE PURSE", price: "$285" },
        { image: "pinkhandbag.jpg", alt: "pinkhandbag", name: "PINK HANDBAG", price: "$300" },
        { image: "yellowbag.jpg", alt: "yellowbag", name: "YELLOW HANDBAG", price: "$320" },
        { image: "partypurse.jpg", alt: "partypurse", name: "PARTY PURSE", price: "$300" }
    ];

    const productSections = document.querySelectorAll(".product-section3");

    productSections.forEach(productSec => {
        shopProducts.forEach(product => {
            const productDiv = document.createElement("div");
            productDiv.classList.add("product-sec");

            const image = document.createElement("img");
            image.src = `./assets/images/${product.image}`;
            image.alt = product.alt;

            const productName = document.createElement("p");
            productName.textContent = product.name;

            const productPrice = document.createElement("p");
            productPrice.textContent = product.price;

            const button = document.createElement("button");
            button.textContent = "ADD TO CART";
            button.classList.add("button");
            button.style.display = "none";

            button.addEventListener("click", () => {
                button.textContent = "VIEW CART";
            });

            productDiv.addEventListener("mouseenter", () => {
                button.style.display = "block";
            });

            productDiv.addEventListener("mouseleave", () => {
                button.style.display = "none";
            });

            productDiv.appendChild(image);
            productDiv.appendChild(productName);
            productDiv.appendChild(productPrice);
            productDiv.appendChild(button);

            productSec.appendChild(productDiv);
        });
    });
});