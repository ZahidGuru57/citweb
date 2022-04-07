const data = {
    products: [{
            name: "lapton",
            price: 100,
            available: true,

        },


        {
            name: "Mango",
            price: 200,
            available: true,

        },

        {
            name: "shirt",
            price: 500,
            available: true,

        },

        {
            name: "Cloth",
            price: 100,
            available: false,

        }
    ]
}

let totalAmount = 0;
for (let i = 0; i < data.products.length; i++) {
    totalAmount += data.products[i].price;
    if (data.products[i].available) {
        data.products[i].price -= (data.products[i].price * 20) / 100;
        console.log("20 percent discount");
        console.log(data.products[i].price);
    }
}
console.log("Total Amount");
console.log(totalAmount);