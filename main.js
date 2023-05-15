// Iphone js
const changeButtonsilver = document.getElementById('changeButtonsilver');
const changeButtonspcblack = document.getElementById('changeButtonspcblack');
const changeButtongold = document.getElementById('changeButtongold');
const changeButtonpurpleold = document.getElementById('changeButtonpurple');

const photosilver = document.getElementById('photosilver');

changeButtonsilver.addEventListener('click', function () {
    photosilver.src = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-silver?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703841892";
});

changeButtonspcblack.addEventListener('click', function () {
    photosilver.src = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-spaceblack?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703841897";
});

changeButtongold.addEventListener('click', function () {
    photosilver.src = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-gold?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703841907";
});

changeButtonpurpleold.addEventListener('click', function () {
    photosilver.src = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-deeppurple?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1663703841896";
});







// let price_device = document.querySelector(".price_device")
// let btn = document.querySelectorAll('.pricee')

// let product = {
//     priceOptions: {
//         "200": 200,
//         "600": 600,
//         "1200": 1200,
//     },
// }
// let price = 1999
// for (let item of btn) {
//     item.addEventListener("click", (event) => {
//         let itemID = Number(event.target.dataset.price)

//         let product_price = product.priceOptions[itemID]

//         price_device.innerHTML = `$${formatCurrency(price + itemID)}`

//     })
// }

// let gb = document.querySelectorAll('.gb')



// gb.forEach(btn => {
//     btn.onclick = () => {
//         gb.forEach(item => item.classList.remove('active'))
//         btn.classList.add('active')
//     }
// })


// const formatCurrency = (amount) =>
//     new Intl.NumberFormat("en-US").format(amount)