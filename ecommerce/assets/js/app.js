const products = [
    { image: "dragonearrings.jpg", alt: "dragon-earrings", name: "EARRINGS", price: "$260" },
    { image: "bronzenecklace.jpg", alt: "bronze-necklace", name: "BRONZE NECKLASE", price: "$260" },
    { image: "necklace.jpg", alt: "necklace", name: "NECKLASE", price: "$260" },
    { image: "weddingring.jpg", alt: "wedding-ring", name: "WEDDING RING", price: "$260" },
    { image: "bordeux.jpg", alt: "bordeux", name: "BORDEUX", price: "$320" },
    { image: "redbag.jpg", alt: "redbag", name: "BORDEUX BAG", price: "$320" },
    { image: "purplepurse.jpg", alt: "purplepurse", name: "PURPLE PURSE", price: "$285" },
    { image: "pinkhandbag.jpg", alt: "pinkhandbag", name: "PINK HANDBAG", price: "$300" },
    { image: "yellowbag.jpg", alt: "yellowbag", name: "YELLOW HANDBAG", price: "$320" },
    { image: "partypurse.jpg", alt: "partypurse", name: "PARTY PURSE", price: "$300" },
    { image: "greenearrings.jpg", alt: "greenearrings", name: "EARRINGS", price: "$200" },
    { image: "goldenwatch.jpg", alt: "goldenwatch", name: "GOLDEN WATCH", price: "$200" },
    { image: "beigesunglasses.jpg", alt: "beigesunglasses", name: "BEIGE SUNGLASSES", price: "$200" },
    { image: "sunglasses.jpg", alt: "sunglasses", name: "SUNGLASSES", price: "$180" },
    { image: "weddingring.jpg", alt: "weddingring", name: "WEDDING RING", price: "$260" },
    { image: "redsunglasses.jpg", alt: "redsunglasses", name: "RED SUNGLASSES", price: "$150" },
    { image: "fancyhat.jpg", alt: "fancyhat", name: "FANCY HAT", price: "$250" },
    { image: "gloves.jpg", alt: "gloves", name: "GLOVES", price: "$200" },
    { image: "leopardbelt.jpg", alt: "leopardbelt", name: "LEOPARD BELT", price: "$200" },
    { image: "engagementring.jpg", alt: "engagementring", name: "ENGAGEMENT RING", price: "$300" }
];

let cart = [];

const renderProducts = (products, sectionId, limit) => {
    const productSection = document.getElementById(sectionId);

    if (!productSection) {
        console.error(`Element with ID '${sectionId}' not found.`);
        return;
    }

    productSection.innerHTML = '';

    
    products.slice(0, limit).forEach(product => {
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
};

document.addEventListener("DOMContentLoaded", () => {
    renderProducts(products, 'product-section', 4);
    renderProducts(products, 'product-section', products.length);
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


/* VIEW CART ANALOGY */

const addToCart = (product) => {
    const cartProduct = cart.find(item => item.id === product.id);

    if (cartProduct) {
        cartProduct.quantity += 1;
    } else {
        cart.push({...product, quantity:1});
    }
    updateCart();
}

const updateCart = () => {
    const cartProductsSection = document.getElementById("cart-products");

    if (cart.length === 0) {
        cartProductsSection.innerHTML = "Your cart is currently empty";
        return;
    }
    
    cartProductsSection.innerHTML = `
    <table>
    <thead>
    <tr>
    <th>PRODUCTS</th>
    <th>PRICE</th>
    <th>QUANTITY</th>
    <th>SUBTOTAL</th>
    </tr>
    </thead>
    <tbody>
    ${cart.map(item => `
        <tr>
        <td>
        <img src="./assets/images/${item.image}" alt="${item.alt}" style="width: 50px; height: 50px;">
        ${item.name}
        </td>
        <td>$${item.price}</td>
        <td>
        <button class="decrease" data-id="${item.id}">-</button>
        ${item.quantity}
        <button class="increase" data-id="${item.id}">+</button>
        </td>
        <td>$${(item.price * item.quantity).toFixed(2)}</td>
        </tr>
        `).join('')}
    </tbody>
    </table>
    `;

    document.querySelectorAll('.increase').forEach(button => {
        button.addEventListener("click", (event) => {
            const id = parseInt(event.target.getAttribute("data-id"));
            const product = cart.find(item => item.id === id);
            product.quantity += 1;
            updateCart();
        });
    });

    document.querySelectorAll(".decrease").forEach(button => {
        button.addEventListener("click", (event) => {
            const id = parseInt(event.target.getAttribute("data-id"));
            const product = cart.find(item => item.id === id);
            if (product.quantity > 1) {
                product.quantity -= 1;
            }
            else {
                cart = cart.filter(item => item.id !== id);
            }
            updateCart();
        })
    })
}