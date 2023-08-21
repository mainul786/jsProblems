const phones = [
    {name:'samsung', ram:'32gb', camera:10, price:20000},
    {name:'oppo', ram:'32gb', camera:10, price:25000},
    {name:'infinix', ram:'32gb', camera:10, price:29000},
    {name:'lenevo', ram:'32gb', camera:10, price:60000},
    {name:'lava', ram:'32gb', camera:10, price:26500},
    {name:'nokia', ram:'32gb', camera:10, price:19000}
]

function chepest(phones){
    let phonePrice = phones[0];
    for (let i = 0; i < phones.length; i++){
        const phone = phones[i];
        // console.log(phone)
        if (phone.price < phonePrice.price){
           phonePrice = phone;
        }
    }
    return phonePrice;
}

const myPhone = chepest(phones);
console.log(myPhone);