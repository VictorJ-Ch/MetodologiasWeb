// Products
let products = [
    {name: "T-shirt", price: 10, stock: 10},
    {name: "Pants", price: 20, stock: 8},
    {name: "Caps", price: 30, stock: 4},
    {name: "Shoes", price: 40, stock: 15}
];

// Cart
let cart = [];

// Add
function addToCart(productName, productQuantity) {
    for (let productItem of products) {
        if (productItem.name === productName) {
            if (productItem.stock >= productQuantity) {
                cart.push({
                    name: productName,
                    productQuantity: productQuantity,
                    price: productItem.price
                });
                productItem.stock -= productQuantity;
                console.info(`"${productQuantity}" "${productName}"(s) added to cart`);
                return;
            } else {
                console.error(`There is no stock for "${productName}"`);
                return;
            }
        }
    }
    console.error(`The product "${productName}" does not exist`);
}

// Remove
function removeFromCart(productName, productQuantity) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].name === productName) {
            if (cart[i].productQuantity >= productQuantity) {
                cart[i].productQuantity -= productQuantity;
                if (cart[i].productQuantity === 0) {
                    cart.splice(i, 1);
                }
                let productItem = products.find(item => item.name === productName);
                productItem.stock += productQuantity;
                console.info(`"${productQuantity}" "${productName}"(s) removed from cart`);
                return;
            } else {
                console.info(`Not enough "${productName}" in cart to remove`);
                return;
            }
        }
    }
    console.error(`The product "${productName}" is not in the cart`);
}

// Maths
function TotalPrice() {
    let total = 0;
    for (let item of cart) {
        total += item.price * item.productQuantity;
    }
    return total;
}

function Discount(total) {
    if (total > 100) {
        return total * 0.9;
    }
    return total;
}

function Purchase() {
    console.log("Processing purchase...");
    let countdown = 3;
    console.log(`Purchase confirmed in ${countdown}...`);
    const interval = setInterval(function() {
        countdown--;
        if (countdown > 0) {
            console.log(`${countdown}...`);
        } else {
            clearInterval(interval);
            let total = TotalPrice();
            total = Discount(total);
            console.log(`Purchased completed, Your total is "${total.toFixed(2)}"`);
            console.log("All done, have a nice day");
        }
    }, 1000);
}

addToCart("Pants", 3); //60 , 5 stock
addToCart("Pants", 4); //80 , 1 stock
addToCart("Pants", 4); //0 , 1 stock, not enough
addToCart("Shoes", 2); //80, 13 stock
addToCart("T-shirt", 3); //30, 7 stock
addToCart("T-shirt", 3); //30, 4 stock
addToCart("Pants", 3); //0, 0 stock
removeFromCart("Pants", 2); //-40, 3 stock
removeFromCart("Caps", 1); // No hay el bolsa
console.log(cart);
let total = TotalPrice(); //240
total = Discount(total); //216
console.log(total);
Purchase();