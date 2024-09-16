const products = [
    {image: "dragonearrings.jpg", alt: "dragon-earrings", name: "EARRINGS", price: "$260" },
    {image: "bronzenecklace.jpg", alt: "bronze-necklace", name: "BRONZE NECKLASE", price: "$260" },
    {image: "necklace.jpg", alt: "necklace", name: "NECKLASE", price: "$260" },
    {image: "weddingring.jpg", alt: "wedding-ring", name: "WEDDINGRING", price: "$260"  }
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