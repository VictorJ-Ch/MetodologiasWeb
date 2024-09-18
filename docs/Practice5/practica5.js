// Products
let products = [
    {name: "T-shirt", price: 15, stock: 10},
    {name: "Pants", price: 25, stock: 8},
    {name: "Caps", price: 5, stock: 4},
    {name: "Shoes", price: 30, stock: 15}
];
// Cart
let cart = [];
function addToCart(productName, productQuantity)
{
    for (let productItem of products)
    {
        if(productItem.name === productName)
        {
            if(productItem.stock >= productQuantity)
            {
                cart.push(
                    {
                        name: productName,
                        productQuantity: productQuantity,
                        price: productItem.price
                    });
                productItem.stock -= productQuantity;
                console.info(`"${productQuantity}" "${productName}"(s) added to cart`);
            }
            else
            {
                console.info(`There is no stock for "${productName}"`);
            }
        }
        return;
    }
    console.error('The product "${productName}" do not exist');
}
function TotalPrice()
{
    let total=0;
    for (let item of cart)
    {
        total += item.price * item.productQuantity;
    }
    return total;
}
function Discount(total)
{
    if(total > 50)
    {
        return total * 0.9;
    }
}
function Purchase()
{
    console.log("Processing purchase...");
    setTimeout(
        function()
        {
            let total = TotalPrice();
            total = Discount(total);
            console.log(`Purchased completed, Your total is "${total.toFixed(2)}"`);
        },3000);
}
addToCart("Pants", 3);
addToCart("Pants", 4);
addToCart("Pants", 4);
addToCart("Shoes", 2);
addToCart("T-shirt", 3);
addToCart("T-shirt", 3);
addToCart("Pants", 3);
console.log(cart);
let total = TotalPrice();
total = Discount(total);
console.log(total);