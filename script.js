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
name: "Cable Management Box",
image: "https://m.media-amazon.com/images/I/51x0WNS+X+L._SL1500_.jpg",
link: "https://amzn.to/4bs71U8"
},
  
{
name: "Rechargeable LED Desk Lamp",
image: "https://m.media-amazon.com/images/I/61L1WtnLLeL._SL1500_.jpg",
link: "https://amzn.to/4rqWT40"
},
  
{
name: "USB-C Multi Port Hub",
image: "https://m.media-amazon.com/images/I/71A1ZR39i4L._SL1500_.jpg",
link: "https://amzn.to/4uL3t8r"
},

{
name: "Adjustable Laptop Stand",
image: "https://m.media-amazon.com/images/I/61jnQQBK4tL._SL1500_.jpg",
link: "https://amzn.to/3PzlEgU"
}

];

const container = document.getElementById("product-list");

products.forEach(product => {

const card = document.createElement("div");
card.classList.add("card");

card.innerHTML = `
<img src="${product.image}" alt="${product.name}">
<h3>${product.name}</h3>
<a href="${product.link}" target="_blank" class="buy-btn">
Check Price on Amazon
</a>
`;

container.appendChild(card);

});
