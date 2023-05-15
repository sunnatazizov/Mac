let price_device = document.querySelector(".price_device")
let btn = document.querySelectorAll('.pricee')

let product = {
    priceOptions: {
        "512": 0,
        "200": 200,
        "600": 600,
        "1200": 1200,
    },
}
let price = 1999
for (let item of btn) {
    item.addEventListener("click", (event) => {
        let itemID = Number(event.target.dataset.price)

        let product_price = product.priceOptions[itemID]

        price_device.innerHTML = `$${formatCurrency(price + itemID)}`

    })
}

let gb = document.querySelectorAll('.gb')



gb.forEach(btn => {
    btn.onclick = () => {
        gb.forEach(item => item.classList.remove('active'))
        btn.classList.add('active')
    }
})


const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-US").format(amount)