const products = [

{
name: "Adjustable Phone Stand",
image: "imagesphone-stand.jpg",
link: "https://amzn.to/4swUHc7"
},

{
name: "Mini Gorilla Tripod",
image: "images/tripod.jpg",
link: "https://amzn.to/4rmaxFB"
},

{
name: "Rechargeable LED Desk Lamp",
image: "images/lamp.jpg",
link: "https://amzn.to/4ulyfEE"
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



