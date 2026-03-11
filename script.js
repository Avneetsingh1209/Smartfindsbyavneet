const products = [

{
name: "Adjustable Phone Stand",
image: "https://m.media-amazon.com/images/I/51FnbY-cX6L._SL1500_.jpg",
link: "https://amzn.to/4swUHc7"
},

{
name: "Mini Gorilla Tripod",
image: "https://m.media-amazon.com/images/I/61MiWNysELL._SL1500_.jpg",
link: "https://amzn.to/4rrwWBd"
},

{
name: "Rechargeable LED Desk Lamp",
image: "https://m.media-amazon.com/images/I/61L1WtnLLeL._SL1500_.jpg",
link: "https://amzn.to/4rqWT40"
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
