
function fooBar(number){
    if(number % 3 === 0 && number % 5 === 0){
        console.log('This No is divisibled by 3 and 5 and this called foobar!');
    } else if( number % 3 === 0 ){
        console.log('This no is Divisibled by 3 and this called foo!!');
    } else if(number % 5 === 0){
    console.log('This no is divisibled by 5 and This is called Bar');
    }
}

const numbers = fooBar(45);
// console.log(numbers);