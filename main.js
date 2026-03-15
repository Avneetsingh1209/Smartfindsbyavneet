function renderProducts(products){

const container = document.getElementById("product-list");

container.innerHTML = ""; // clears old content

products.forEach(product => {

const card = document.createElement("div");
card.classList.add("card");

card.innerHTML = `
<img src="${product.image}" alt="${product.name}">

<h3>${product.name}</h3>

<p class="rating">${product.rating}</p>

<p class="desc">${product.desc}</p>

<p class="badge">${product.badge}</p>

<a href="${product.link}" target="_blank" rel="nofollow sponsored" class="buy-btn">
Check Price on Amazon
</a>
`;

container.appendChild(card);

});

}