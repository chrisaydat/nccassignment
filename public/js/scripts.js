// Sample catalog data (you can replace this with your own data)
const catalogData = [
    { name: "Product 1", price: "$19.99" },
    { name: "Product 2", price: "$24.99" },
    { name: "Product 3", price: "$29.99" },
    // Add more items as needed
];

// Function to generate catalog content
function generateCatalogContent() {
    const catalogContainer = document.getElementById("catalog-plugin");

    catalogData.forEach((item) => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <h3>${item.name}</h3>
            <p class="price">${item.price}</p>
            <button>Add to Cart</button>
        `;
        catalogContainer.appendChild(productCard);
    });
}

// Call the function to generate catalog content
generateCatalogContent();
