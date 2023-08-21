const shoppingCart = [ 
    {phone:'samsung', price:25000},
    {phone:'nokia', price:18000},
    {phone:'vivo', price:12000}
];

function productsSum(products){
    let sum = 0;
    for ( let i = 0; i < products.length; i++){
        const product = products[i];
        // console.log(product);
        sum += product.price;
    }
    return sum;
}


const totalProductPrice = productsSum(shoppingCart);
console.log(totalProductPrice);