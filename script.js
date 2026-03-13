const products = [

{
name: "Adjustable Phone Stand",
image: "https://m.media-amazon.com/images/I/51FnbY-cX6L._SL1500_.jpg",
link: "https://amzn.to/4swUHc7",
rating: "⭐ 4.4/5 (12K+ reviews)",
desc: "Perfect for video calls & hands-free viewing.",
badge: "🔥 Best Budget Pick"
},

{
name: "Mini Gorilla Tripod",
image: "https://m.media-amazon.com/images/I/61MiWNysELL._SL1500_.jpg",
link: "https://amzn.to/4rrwWBd",
rating: "⭐ 4.5/5 (8K+ reviews)",
desc: "Flexible tripod for mobile photography & reels.",
badge: "📸 Creator Favorite"
},

{
name: "Foldable Laptop Stand",
image: "https://m.media-amazon.com/images/I/61i05gGBl3L._SL1500_.jpg",
link: "https://amzn.to/4utwmWo",
rating: "⭐ 4.4/5 (6K+ reviews)",
desc: "Improves posture & airflow for laptops.",
badge: "🏆 Best for Work Desk"
},
  
{
name: "Cable Management Box",
image: "https://m.media-amazon.com/images/I/51x0WNS+X+L._SL1500_.jpg",
link: "https://amzn.to/4bs71U8",
rating: "⭐ 4.3/5 (5K+ reviews)",
desc: "Hide messy wires & keep desk clean.",
badge: "✨ Clean Desk Essential"
},
  
{
name: "Rechargeable LED Desk Lamp",
image: "https://m.media-amazon.com/images/I/61L1WtnLLeL._SL1500_.jpg",
link: "https://amzn.to/4rqWT40",
rating: "⭐ 4.5/5 (9K+ reviews)",
desc: "Adjustable brightness for study & night work.",
badge: "💡 Most Popular"
},
  
{
name: "USB-C Multi Port Hub",
image: "https://m.media-amazon.com/images/I/71A1ZR39i4L._SL1500_.jpg",
link: "https://amzn.to/4uL3t8r",
rating: "⭐ 4.4/5 (7K+ reviews)",
desc: "Expand laptop ports for productivity.",
badge: "⚡ Power User Pick"
},

{
name: "Adjustable Laptop Stand",
image: "https://m.media-amazon.com/images/I/61jnQQBK4tL._SL1500_.jpg",
link: "https://amzn.to/3PzlEgU",
rating: "⭐ 4.5/5 (11K+ reviews)",
desc: "Sturdy aluminum stand for long work hours.",
badge: "🔥 Top Rated"
}

];

const container = document.getElementById("product-list");

products.forEach(product => {

const card = document.createElement("div");
card.classList.add("card");

card.innerHTML = `
<img src="${product.image}" alt="${product.name}">

<h3>${product.name}</h3>

<p class="rating">${product.rating}</p>

<p class="desc">${product.desc}</p>

<p class="badge">${product.badge}</p>

<a href="${product.link}" target="_blank" class="buy-btn">
Check Price on Amazon
</a>
`;

container.appendChild(card);

});
