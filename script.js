let productsGrid = document.getElementById("products-grid");
let productsArray = [];
let url = "https://my-json-server.typicode.com/vitaliimkb/final_project_wed_18_00/products";
let xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.responseType = "json";
xhr.send();

xhr.onload = function() {
    let products = xhr.response;
    productsArray = products
    productsGrid.innerHTML = null;

    for (const product of products) {
        let productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <h2 class="product-name">${product.name}</h2>
            <img src="${product.photo_url}" class="product-img">
            <p class="product-desc">${product.description}</p>
            <p class="product-price">Price: ${product.price}</p>
            <a href="user.html?id=${product.author_id}">Seller profile</a>
            <button>Buy</button>
        `;
        productsGrid.append(productElement);
    }
}