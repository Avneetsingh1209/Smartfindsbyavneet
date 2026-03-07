const products = [

{
name: "Adjustable Phone Stand",
image: "https://m.media-amazon.com/images/I/51FnbY-cX6L._SL1500_.jpg",
link: "https://amzn.to/4swUHc7"
},

{
name: "Mini Gorilla Tripod",
image: "https://m.media-amazon.com/images/I/61oJvYz8gPL._AC_SL1500_.jpg",
link: "YOUR_AMAZON_AFFILIATE_LINK"
},

{
name: "Rechargeable LED Desk Lamp",
image: "https://m.media-amazon.com/images/I/61JkH3qUeUL._AC_SL1500_.jpg",
link: "YOUR_AMAZON_AFFILIATE_LINK"
}

];

const container = document.getElementById("product-list");

products.forEach(product => {

const card = document.createElement("div");
card.classList.add("card");

card.innerHTML = `
<img src="${product.image}">
<h3>${product.name}</h3>
<a href="${product.link}" target="_blank" class="buy-btn">Check Price on Amazon</a>
`;

container.appendChild(card);


});
